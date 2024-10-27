import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import './navbar.css';

function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Toggle menu visibility with a delay
    const toggleMenu = () => {
        if (isMenuVisible) {
            // If menu is visible, set animating state and then hide after 1 second
            setIsAnimating(true);
            setTimeout(() => {
                setIsMenuVisible(false);
                setIsAnimating(false);
            }, 300); // Duration must match CSS transition
        } else {
            // If menu is hidden, show it immediately
            setIsMenuVisible(true);
        }
    };

    // Close menu when a menu item is clicked
    const handleMenuItemClick = () => {
        toggleMenu();
    };

    return (
        <nav>
            <div className="nav-logo">Shakti</div>
            <div className="menus" onClick={toggleMenu}>
                <IoIosMenu />
            </div>
            <div className={`menu-list ${isMenuVisible ? 'show' : ''} ${isAnimating ? 'hiding' : ''}`}>
                <ul>
                    <li onClick={handleMenuItemClick}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="#about">About</a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li onClick={handleMenuItemClick}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
