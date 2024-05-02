import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";

const Body = () => {
    // State Variable(it maintains the state of a component) or React variable
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredList, setFilteredList] = useState([])
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);

    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456292&lng=78.375936&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json();
        const restaurantsMock = res.data.cards.filter((card) => card.card.card.id === "restaurant_grid_listing")
        const { card: {card} } = restaurantsMock[0];
        const {infoWithStyle: {restaurants}} = card.gridElements;
        setRestaurantsList(restaurants);
        setFilteredList(restaurants);
    }

    const filterTopRatedRestaurants = () => {
        const filterList = restaurantsList.filter((restaurant) => restaurant.info.avgRating > 4);
        setFilteredList(filterList);
    }

    const filterListBasedOnSearch = () => {
        const filteredList = restaurantsList.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setFilteredList(filteredList);
    };
    if (!onlineStatus) return <h1>Seems like you are offline</h1>
    return restaurantsList.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter-container d-flex col-gap-30">
                <div className="d-flex">
                <input type="text" onChange={(e) => {
                    setSearchText(e.target.value);
                }} value={searchText} />
                <button onClick={filterListBasedOnSearch}>search</button>
                </div>
                <button onClick={filterTopRatedRestaurants} className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    filteredList.map((restaurant) => <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>)
                }
            </div>
        </div>
    )
}
export default Body;