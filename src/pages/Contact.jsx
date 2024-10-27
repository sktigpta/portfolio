import './pages.css'

function Contact() {
    const openGoogleForm = () => {
        window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSfFgygM5z8iqLZLejjkgGnt_LETq5_Xjl_m_ZycPoYm2J3EyQ/viewform",
            "_blank"
        );
    };

    return (<>
        <h1>Contact Me</h1>
        <div className="form-placeholder" style={{
            marginBottom:"1em"
        }}>
            <p>
                Please fill out the form below, and I'll get back to you as soon as
                possible.
            </p>
            <button onClick={openGoogleForm}>
                Contact me
            </button>
        </div >
    </>
    );
}

export default Contact;