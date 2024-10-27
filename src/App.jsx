// App.jsx
import React, { useState, useEffect } from 'react';
import Loader from './components/loader/Loader';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading period
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // 3 seconds loading time

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    return (
        <div>
            {loading ? <Loader /> :
                <>
                    <Navbar />
                    <main>
                        <Home />
                        <Projects/>
                        <Skills/>
                        <About/>
                        <Contact/>
                    </main>
                </>
            }
        </div>
    );
};

export default App;
