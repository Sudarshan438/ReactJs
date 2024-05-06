import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHooks/useOnlineStatus";

const Header = () => {
    console.log("Fresh component render");
    const [btnText, setBtnText] = useState('Login');
    const onlineStatus = useOnlineStatus();
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
                    <li className="px-4">Cart</li>
                    <li>
                    <button onClick={toggleBtnText}>{btnText}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;