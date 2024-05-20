import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Shimmer from '../components/Shimmer';
import useRestaurantMenu from '../utils/CustomHooks/useRestaurantMenu';
import { RESTAURANT_RECOMMENDED } from '../utils/mockData';
import RestaurantCategory from '../components/RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const categories = RESTAURANT_RECOMMENDED
    const restaurantInfo = useRestaurantMenu(resId);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const {name, cuisines, costForTwoMessage} = restaurantInfo?.data?.cards[2]?.card?.card?.info || {};
    
    return !restaurantInfo ? <Shimmer /> : (
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <h3 className="font-bold">{cuisines.join(' ,')} - {costForTwoMessage}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
            </ul>
            {/* Categories accordian */}
            {
            categories.map((category, index) => <RestaurantCategory 
                key={category.id} 
                isExpanded={index === selectedIndex} 
                category={category}
                setIndex={() => setSelectedIndex(
                    (previousIndex) => previousIndex === index ? null : index)
                }
            />)
            }
        </div>
    )
}

export default RestaurantMenu