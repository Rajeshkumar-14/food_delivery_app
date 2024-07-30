import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home")

    const handleMenu = (menu) => {
        setMenu(menu)
    };

    const handleLogin = () => {
        setShowLogin(true)
    }

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="" className='logo' />
            <ul className="navbar-menu">
                <Link to={"/"} onClick={() => handleMenu('home')} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => handleMenu('menu')} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => handleMenu('mobile-app')} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => handleMenu('contact-us')} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button onClick={() => handleLogin()}>SignIn</button>
            </div>
        </div>
    )
}

export default Navbar
