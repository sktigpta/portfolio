import './pages.css';
import { IoIosArrowDown } from "react-icons/io";
import Picture1 from '../assets/pictures/sktigpta.jpg'; // Fixed the folder name typo

function Hero() {
    const scrollDown = () => {
        window.scrollBy({
            top: 200, // Scroll down by 5em (5 * 16px = 80px)
            left: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };

    return (
        <>
            <div className="pages">
                <div className="hero">
                    <div className='round'>

                        <div className="profile-picture">
                            <img src={Picture1} alt="Profile of Shaktidhar" /> {/* Displaying the profile picture */}
                        </div>

                        <div className="title">
                            <h1>Shaktidhar</h1>
                        </div>

                        <button className='hero-btn' onClick={scrollDown}> {/* Updated click handler */}
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
