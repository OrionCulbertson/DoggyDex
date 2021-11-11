import React, { useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const UserProfile = () => {
    //Change to check global user state
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginOptions = [
        "Login",
        "Create Account",
        "Continue as Guest",
    ];
    const loginLinks = {
        "Login": "/log-in",
        "Create Account": "/create-account",
        "Continue as Guest": "/",
    };

    return (
        <>
            <Logo />
            <div className="contentContainer">
            {isLoggedIn ?
                <Link
                    className="menuLink">
                    onClick = { () => {
                        isLoggedIn = false;
                    }}
                    <Button contents={<div>Log Out</div>} styleClass="stdButton" />
                </Link>

                :

                <>
                    {loginOptions.map((option, index) => (
                        <div>
                            <Link key={index} to={loginLinks[option]} className="menuLink">
                                <Button contents={option} styleClass="stdButton" />
                            </Link>
                            {/* <Button contents={<Link to={loginLinks[option]} className="menuLink">{option}</Link>} styleClass="stdButton" /> */}
                        </div>
                    ))}
                </>
            }
            </div>
        </>
    )
}

export default UserProfile;
