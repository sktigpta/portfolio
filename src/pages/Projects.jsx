// src/Projects.jsx
import './pages.css';

// Importing images for projects
import Ecommerce from '../assets/cards/Ecommerce.jpg';
import LibraryManagement from '../assets/cards/libraryManagement.jpg';
import WeatherForecasting from '../assets/cards/weatherForecasting.jpg';
import Web3 from '../assets/cards/web3.jpg';

// Data array for project details
const projects = [
    {
        id: 1,
        name: 'E-commerce Platform',
        description: 'A scalable platform for online shopping with secure payment gateway integration.',
        image: Ecommerce,
    },
    {
        id: 2,
        name: 'Library Management System',
        description: 'An efficient library system for managing books, members, and transactions.',
        image: LibraryManagement,
    },
    {
        id: 3,
        name: 'Weather Forecasting App',
        description: 'An application that provides real-time weather updates and forecasts.',
        image: WeatherForecasting,
    },
    {
        id: 4,
        name: 'Web3 Blockchain Platform',
        description: 'A decentralized application built on blockchain technology.',
        image: Web3,
    },
];

function Projects() {
    return (
        <div className="pages">
            <h1>Projects</h1>
            <div className="project-section">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div
                            className="item"
                            style={{
                                backgroundImage: `url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '0.5em',
                                overflow: 'hidden',
                                height: '40vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                color: 'white',
                                padding: '1em',
                            }}
                        >
                            <div className="item-desc">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
