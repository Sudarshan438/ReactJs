import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {info: {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId}} = resData;
    return (
        <div className='res-card'>
            <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

export default RestaurantCard;