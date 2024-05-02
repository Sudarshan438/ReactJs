import React from 'react';
import { useParams } from "react-router-dom";
import Shimmer from '../components/Shimmer';
import useRestaurantMenu from '../utils/CustomHooks/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);
    const {name, cuisines, costForTwoMessage} = restaurantInfo?.data?.cards[2]?.card?.card?.info || {};
    return !restaurantInfo ? <Shimmer /> : (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(' ,')} - {costForTwoMessage}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu