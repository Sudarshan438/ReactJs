import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    console.log("Fresh component render");
    const [btnText, setBtnText] = useState('Login');
    const toggleBtnText = () => {
        btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login');
    }
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <li>
                    <button onClick={toggleBtnText}>{btnText}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;