import React, { useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';

const UserProfile = () => {
    //Change to check global user state
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch();
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

    const signOut = () => {
        console.log("Logging out...");
        dispatch(logout("msg"));
    }
    return (
        <>
            <Logo />

            {isLoggedIn ?
                <>
                    <div className="contentContainer">
                        <table>
                            <tr>
                                <td className="firstCol">Name:</td>
                                <td className="lastCol">TODO</td>
                            </tr>
                            <tr>
                                <td className="firstCol">Username:</td>
                                <td className="lastCol">TODO</td>
                            </tr>
                            <tr>
                                <td className="firstCol">Email:</td>
                                <td className="lastCol">TODO</td>
                            </tr>
                            <tr>
                                <td className="firstCol">Dog Breeds Found:</td>
                                <td className="lastCol">TODO</td>
                            </tr>
                        </table>
                    </div>
                    <Link id="logOutButton" className="menuLink" to="/" onClick={signOut}>
                        <Button contents={<div>Log Out</div>} id="logOutButton" styleClass="stdButton" />
                    </Link>
                    {/* <button onClick={signOut}>Log Out</button> */}
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
