// src/Skills.jsx

import React from 'react';
import './pages.css'; // Include your CSS
import { 
    FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, 
    FaJava, FaAws, FaWordpress 
} from 'react-icons/fa';
import { 
    SiMongodb, SiVisualstudiocode, SiCanva, SiMicrosoftexcel 
} from 'react-icons/si';

const skillCategories = {
    "Programming Languages": [
        { name: 'Java', icon: <FaJava size={40} color="#5382A1" />, level: 60 },
        { name: 'C', icon: <FaPython size={40} color="#306998" />, level: 70 },
        { name: 'C++', icon: <FaPython size={40} color="#306998" />, level: 70 },
        { name: 'Data Structures', icon: <FaJs size={40} color="#F0DB4F" />, level: 50 },
    ],
    "Web Technologies": [
        { name: 'HTML', icon: <FaHtml5 size={40} color="#E44D26" />, level: 95 },
        { name: 'CSS', icon: <FaCss3Alt size={40} color="#2965F1" />, level: 75 },
        { name: 'JavaScript', icon: <FaJs size={40} color="#F0DB4F" />, level: 85 },
        { name: 'React', icon: <FaReact size={40} color="#61DBFB" />, level: 90 },
        { name: 'MongoDB', icon: <SiMongodb size={40} color="#4DB33D" />, level: 70 },
        { name: 'AWS', icon: <FaAws size={40} color="#FF9900" />, level: 65 },
    ],
    "Tools": [
        { name: 'VS Code', icon: <SiVisualstudiocode size={40} color="#007ACC" />, level: 90 },
        { name: 'Canva', icon: <SiCanva size={40} color="#00C4CC" />, level: 80 },
        { name: 'MS Excel', icon: <SiMicrosoftexcel size={40} color="#217346" />, level: 85 },
        { name: 'WordPress', icon: <FaWordpress size={40} color="#21759B" />, level: 75 },
    ],
    "Soft Skills": [
        { name: 'Teamwork', icon: null, level: 85 },
        { name: 'Problem Solving', icon: null, level: 80 },
        { name: 'Adaptability', icon: null, level: 75 },
        { name: 'Quick Learner', icon: null, level: 90 },
    ],
};

function Skills() {
    return (
        <div className="pages">
            <div className="skills-container">
                <h1>My Skills</h1>
                {Object.entries(skillCategories).map(([category, skills], catIndex) => (
                    <div key={catIndex} className="skills-category">
                        <h2>{category}</h2>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <div className="skill-card" key={index}>
                                    <div className="skill-header">
                                        {skill.icon && <div className="skill-icon">{skill.icon}</div>}
                                        <p>{skill.name}</p>
                                    </div>
                                    <div className="progress-bar">
                                        <div
                                            className="progress"
                                            style={{ width: `${skill.level}%` }}
                                        >
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
