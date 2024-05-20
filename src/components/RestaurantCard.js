import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const {info: {name, cuisines, avgRating, costForTwo, deliveryTime, cloudinaryImageId}} = resData;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img className="w-[250px] h-40 rounded-lg" src={`${CDN_URL}${cloudinaryImageId}`}></img>
            <h3 className="font-bold py-2 text-xl">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
};

export const withBestRatingLabel = (RestaurantCard) => {
    return (props) => {
        return <>
            <label className="absolute bg-black text-white m-4 p-2 rounded-lg">Best Rating</label>
            <RestaurantCard {...props}></RestaurantCard>
        </>
    }
}

export default RestaurantCard;