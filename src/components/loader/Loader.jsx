// Loader.jsx
import React from 'react';
import './Loader.css'; // Import the CSS file for styling
import { IoFish } from "react-icons/io5"; // Import the fish icon

const Loader = () => {
    return (
        <div className="loader">
            <div className="fish-icon">
                <IoFish />
            </div>
            <h2>Shaktidhar</h2>
        </div>
    );
};

export default Loader;
