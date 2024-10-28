import './pages.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons

function Contact() {
    const openGoogleForm = () => {
        window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSfFgygM5z8iqLZLejjkgGnt_LETq5_Xjl_m_ZycPoYm2J3EyQ/viewform",
            "_blank"
        );
    };

    return (
        <>
            <h1>Contact Me</h1>
            <div className="social-card" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5em",
                border: "0.5px solid #ccc", // Card border
                borderRadius: "8px", // Rounded corners
                marginTop: "1em",
                marginBottom: "0.5em",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}>
                <div className="social-icons" style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "2em",
                }}>
                    <a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/sktigpta?trk=profile-badge" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={40} color="#0077B5" />
                    </a>
                    <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={40} color="#1DA1F2" />
                    </a>
                    <a href="https://instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} color="#E1306C" />
                    </a>
                </div>
            </div>
            <div className="form-placeholder" style={{ marginBottom: "1em" }}>
                <p>Please fill out the form below, and I'll get back to you as soon as possible.</p>
                <button onClick={openGoogleForm}>
                    Contact me
                </button>
            </div>
        </>
    );
}

export default Contact;
