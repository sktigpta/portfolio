import './pages.css';
import { IoIosArrowDown } from "react-icons/io";

function Home() {
    return (
        <>
            <div className="pages">
                <div className="hero">
                    <div className='round'>
                        
                        <div className="title">
                            <h1>Shaktidhar</h1>
                        </div>

                        <button style={{
                            zIndex: "10",
                            padding: ".2em 0.7em",
                            fontSize: "2.5em",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "25px",
                            border: "none",
                            color: "white",
                            backgroundColor: "#697565"
                        }}>
                            <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
