import { MENU_API_URL } from "../utils/constants";

export async function getRestaurantDetails(resId) {
    const data = await fetch(`${MENU_API_URL}${resId}`);
    const result = await data.json();
    return result;
}