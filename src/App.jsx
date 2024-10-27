// App.jsx
import React, { useState, useEffect } from 'react';
import Loader from './components/loader/Loader';
import Home from './pages/Home'; // Keep Home as the main component
import Navbar from './components/navbar/Navbar';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div>
            {loading ? <Loader /> :
                <>
                    <Navbar />
                    <Home /> {/* Render the Home component directly */}
                </>
            }
        </div>
    );
};

export default App;
