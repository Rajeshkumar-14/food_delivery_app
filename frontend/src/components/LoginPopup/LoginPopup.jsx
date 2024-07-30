import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign Up")

    const handleCurrentState = (currentState) => {
        setCurrentState(currentState)
    }

    const handleShowLogin = () => {
        setShowLogin(false);
    }
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={handleShowLogin} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Sign Up" && <input type="text" placeholder='Name' required />}
                    <input type="email" placeholder='Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the Terms of Service and Privacy Policy</p>
                </div>
                {currentState === "Login" ? <p>Create a new account? <span onClick={() => handleCurrentState("Sign Up")}>Click Here</span></p>
                    :
                    <p>Already have anaccount? <span onClick={() => handleCurrentState("Login")}>Login Here</span></p>}
            </form>
        </div>
    )
}

export default LoginPopup
