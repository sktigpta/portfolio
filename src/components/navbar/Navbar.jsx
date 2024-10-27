import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import './navbar.css';

function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    // Toggle menu visibility on click
    const toggleMenu = () => {
        setIsMenuVisible(prevState => !prevState);
    };

    // Close menu when a menu item is clicked
    const handleMenuItemClick = () => {
        setIsMenuVisible(false);
    };

    return (
        <nav>
            <div className="nav-logo">Shakti</div>
            <div className="menus" onClick={toggleMenu}>
                <IoIosMenu />
            </div>
            {isMenuVisible && (
                <div className="menu-list">
                    <ul>
                        <li onClick={handleMenuItemClick}>Home</li>
                        <li onClick={handleMenuItemClick}>About</li>
                        <li onClick={handleMenuItemClick}>Services</li>
                        <li onClick={handleMenuItemClick}>Contact</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
