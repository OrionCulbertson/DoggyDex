import React, { useEffect, useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';
import UserService from '../services/user.service';
import { setUserDoggydex } from '../actions/userDoggyDex';
import ProfileLine from './ProfileLine';

const UserProfile = () => {
    //Change to check global user state
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isLoggedIn, user } = useSelector(state => state.auth);
    // const { user } = useSelector((state) => state.auth);
    const { userDoggyDex } = useSelector(state => state.userDoggyDex);
    let token = '';
    let decodedToken = '';

    if(isLoggedIn) {
        token = user.token;
        decodedToken = jwt_decode(token);
        console.log(decodedToken);
    }

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
        dispatch(logout());
    }

    // Could be used on doggydex page to update user doggydex
    useEffect(() => {
        // console.log("Effect", isLoggedIn);
        // console.log(UserService.getUserDoggyDex())
        if (isLoggedIn && !userDoggyDex) {
            UserService.getUserDoggyDex().then(res => {
                dispatch(setUserDoggydex(res));
            }).catch(err => console.log(err))
        }
        // userService.getUserDoggyDex().then(res =>console.log(res ))
    }, [isLoggedIn]);

    return (
        <>
            <Logo />
            {isLoggedIn ?
                <>
                    <div className="contentContainer">
                        <ProfileLine title="Name" contents={user.name} />
                        <ProfileLine title="Username" contents={decodedToken.userName} />
                        <ProfileLine title="Email" contents={user.email} />
                        <ProfileLine title="Dog Breeds Found" contents={userDoggyDex ? userDoggyDex.length : 0} />
                    </div>
                    <Link id="logOutButton" className="menuLink" to="/" onClick={signOut}>
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
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}

export default UserProfile;
