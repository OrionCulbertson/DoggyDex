// https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

import React, { useState } from 'react'
import MenuButton from './MenuButton';
import { FaBars, FaRegWindowClose } from 'react-icons/fa'
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDogUploaded } from '../actions/dogUploaded';

const Menu = () => {
    const [visibility, setVisibility] = useState("hide");
    const [isVisible, setIsVisible] = useState(true)
    const menuOptions = [
        "User Profile",
        "DoggyDex",
        "Upload Dog",
    ];
    const menuLinks = {
        "User Profile": "/user-profile",
        "DoggyDex": "/doggydex",
        "Upload Dog": "/",
    };
    const { isDogUploaded } = useSelector(state => state.dogUploaded); //NOT WORKING, WHYYYYYYYYY


    const location = useLocation();
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsVisible(!isVisible);
        setVisibility((isVisible) ? "show" : "hide");
        // console.log(isVisible);
        // console.log(location.pathname);
    }

    const menuClick = () => {
        toggleMenu();
        dispatch(setIsDogUploaded(false));
    }

    return (
        <>
            <MenuButton func={toggleMenu} contents={<FaBars />} />
            <div
                id="flyoutMenu"
                className={visibility}
            >
            
                <MenuButton func={toggleMenu} contents={<FaRegWindowClose />} />
                <Logo />
                <div className="menuOrganization">
                    {menuOptions.map((option, index) => (
                        <Link to={menuLinks[option]} className="menuLink" onClick={menuClick}>
                            <Button
                                key={index}
                                contents={option}
                                // onClick={toggleMenu}
                                styleClass="navButton"
                                color={(location.pathname === menuLinks[option]) ? "#FFED86" : "#F7CAD0"}
                            />
                        </Link>))}
                </div>
            </div>
        </>
    )
}

export default Menu;
