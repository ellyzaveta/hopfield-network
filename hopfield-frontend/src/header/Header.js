import React from 'react';
import logo from "./images/logo.svg"
import "./Header.css"

const Header = () => {
    
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" className="logo"/>
                <h3 className='logo-text'>HOPFIELD NETWORK</h3>
            </div>
        </div>
    )
}

export default Header;