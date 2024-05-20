import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";
import UserContext from "../utils/Contexts/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnText, setBtnText] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const {items: cartItems} = useSelector((store) => store.cart);
    const data = useContext(UserContext);
    console.log({data});
    const toggleBtnText = () => {
        btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
    }
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg items-center">
            <div className='logo-container'>
                <img className="w-24" src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul className="flex p-4 m-4">
                <li className="px-4">Online Status {onlineStatus ? "✅" : "🟡"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link> - {cartItems?.length}</li>
                    <li className="px-4">
                    <button onClick={toggleBtnText}>{btnText}</button>
                    </li>
                    <li className="font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;