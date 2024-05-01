import React, { useEffect, useState } from 'react';
import { getRestaurantDetails } from "../Api/restaurant";
import { useParams } from "react-router-dom";
import Shimmer from '../components/Shimmer';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await getRestaurantDetails(resId);
        console.log(data);
        setRestaurantInfo(data);
    }
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