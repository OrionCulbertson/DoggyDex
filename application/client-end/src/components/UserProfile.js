import React, { useEffect, useState } from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/auth';
import UserService from '../services/user.service';
import { setUserDoggydex } from '../actions/userDoggyDex';
import userService from '../services/user.service';
import ProfileLine from './ProfileLine';




const UserProfile = () => {
    //Change to check global user state
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { isLoggedIn, user } = useSelector(state => state.auth);
    // const { user } = useSelector((state) => state.auth);
    const { userDoggyDex } = useSelector(state => state.userDoggyDex);
    let token = '';
    let decodedToken = '';

    if(isLoggedIn){
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
                        {/* <table className="tableStyle">
                            <tbody>
                                <tr className="userProfileTableLine">
                                    <td>Name:</td>
                                    <td>{user.name}</td>
                                </tr>
                                <tr className="userProfileTableLine">
                                    <td>Username:</td>
                                    <td>{user.userName}</td>
                                </tr>
                                <tr className="userProfileTableLine">
                                    <td>Email:</td>
                                    <td>{user.email}</td>
                                </tr>
                                <tr className="userProfileTableLine">
                                    <td>Dog Breeds Found:</td>
                                    <td>{userDoggyDex ? userDoggyDex.length : 0}</td>
                                </tr>
                            </tbody>
                        </table> */}

                        <ProfileLine title="Name" contents={user.name} />
                        <ProfileLine title="Username" contents={decodedToken.userName} />
                        <ProfileLine title="Email" contents={user.email} />
                        <ProfileLine title="Dog Breeds Found" contents={decodedToken ? decodedToken.dogbreedIDs.length : 0} />
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
