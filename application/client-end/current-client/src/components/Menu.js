// https://www.kirupa.com/react/smooth_sliding_menu_react_motion.htm

import React, { useState } from 'react'
import MenuButton from './MenuButton';
import { FaBars, FaRegWindowClose } from 'react-icons/fa'
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

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
    const location = useLocation();

    const toggleMenu = () => {
        setIsVisible(!isVisible);
        setVisibility((isVisible) ? "show" : "hide");
        // console.log(isVisible);
        // console.log(location.pathname);
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
                    {/* <Button contents={<Link to=""></Link>} onClick={toggleMenu} styleClass="navButton" />
                    <Button contents={<Link to=""></Link>} onClick={toggleMenu} styleClass="navButton" />
                     */}
                     
                    {menuOptions.map((option, index) => (
                        <Link to={menuLinks[option]} className="menuLink" onClick={toggleMenu}>
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

export default Menu
