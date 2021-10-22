import './aboutme.css'

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="about-meLeft">
                <div className="about-meCard bg"></div>
                <div className="about-meCard">
                    <img src="/assets/shola_piano.JPG" alt="Shola playing piano" className="about-meImg" />
                </div>
            </div>
            <div className="about-meRight"></div>
        </div>
    );
}

export default AboutMe;