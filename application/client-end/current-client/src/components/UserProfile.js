import React, { useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const UserProfile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginOptions = [
        "Log In",
        "Create Account",
        "Continue as Guest",
    ];
    const loginLinks = {
        "Log In": "/log-in",
        "Create Account": "/create-account",
        "Continue as Guest": "/",
    };

    return (
        <>
            {isLoggedIn ?
                null
                :
                <>
                    <Logo />
                    <div className="contentContainer">
                        {loginOptions.map((option, index) => (
                            <div>
                                <Link key={index} to={loginLinks[option]} className="menuLink">
                                    <Button contents={option} styleClass="stdButton" />
                                </Link>
                                {/* <Button contents={<Link to={loginLinks[option]} className="menuLink">{option}</Link>} styleClass="stdButton" /> */}
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}

export default UserProfile
