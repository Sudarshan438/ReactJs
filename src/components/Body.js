import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withBestRatingLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import UserContext from "../utils/Contexts/UserContext";

const Body = () => {
    // State Variable(it maintains the state of a component) or React variable
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredList, setFilteredList] = useState([])
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);

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
    const WithBestRating = withBestRatingLabel(RestaurantCard)
    if (!onlineStatus) return <h1>Seems like you are offline</h1>
    console.log(restaurantsList);
    return restaurantsList.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter-container d-flex col-gap-30">
                <div className="flex items-center">
                <input className="border border-solid border-black" type="text" onChange={(e) => {
                    setSearchText(e.target.value);
                }} value={searchText} />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={filterListBasedOnSearch}>search</button>
                <div>
                    <button onClick={filterTopRatedRestaurants} className="px-4 py-2 bg-gray-100 rounded-lg">Top Rated Restaurants</button>
                </div>
                <div>
                    <label htmlFor="user-name">UserName</label>
                    <input id="user-name" type="text" className="border border-black mx-4" 
                        value={loggedInUser} 
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {
                    filteredList.map((restaurant) => <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                      {restaurant.info.avgRating > 4 ? 
                        <WithBestRating resData={restaurant}></WithBestRating> : 
                        <RestaurantCard resData={restaurant} />
                      } 
                    </Link>
                    )
                }
            </div>
        </div>
    )
}
export default Body;