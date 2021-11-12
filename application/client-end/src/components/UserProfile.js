import React, { useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const UserProfile = () => {
    //Change to check global user state
    const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            
            {isLoggedIn ?
                <>
                    <div className="contentContainer">
                        <table>
                            <tr className="userProfileTableLine">
                                <td>Name:</td>
                                <td>TODO</td>
                            </tr>
                            <tr className="userProfileTableLine">
                                <td>Username:</td>
                                <td>TODO</td>
                            </tr>
                            <tr className="userProfileTableLine">
                                <td>Email:</td>
                                <td>TODO</td>
                            </tr>
                            <tr className="userProfileTableLine">
                                <td>Dogs Found:</td>
                                <td>TODO</td>
                            </tr>
                            <tr className="userProfileTableLine">
                                <td>Dog Breeds Found:</td>
                                <td>TODO</td>
                            </tr>
                        </table>
                    </div>
                    <Link id="logOutButton" className="menuLink">
                        <Button contents={<div>Log Out</div>} id="logOutButton" styleClass="stdButton" />
                    </Link>
                </>

                :

                <>
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

export default UserProfile;
