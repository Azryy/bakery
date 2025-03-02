import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign up" && (
                        <input type="text" placeholder='Enter your name' required />
                    )}
                    <input type="email" placeholder='Enter your email' required />
                    <input type="password" placeholder='Enter your password' required />
                    {currState === "Login" && (
                         <a href="" className='forgot-password'>Forgot password?</a>
                    )}
                  
                    {currState === "Sign up" && (
                        <input type="password" placeholder='Confirm your password' required />
                    )}
                </div>
                <button>{currState === "Sign up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use and privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;