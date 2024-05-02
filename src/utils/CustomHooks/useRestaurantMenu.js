import { useState, useEffect } from "react";
import { getRestaurantDetails } from "../../Api/restaurant";

const useRestaurantMenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    /**
     * Fetch Data
     */
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await getRestaurantDetails(resId);
        setRestaurantInfo(data);
    }
    return restaurantInfo;
}

export default useRestaurantMenu