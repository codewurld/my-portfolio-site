import './aboutme.css'

const AboutMe = () => {
    return (
        <div className="about-me">
            {/* divide component to two containers - left and right */}
            <div className="about-meLeft">
                <div className="about-meCard bg"></div>
                <div className="about-meCard">
                    <img src="/assets/shola_piano.JPG" alt="Shola playing piano" className="about-meImg" />
                </div>
            </div>
            <div className="about-meRight">
                <h1 className="about-meTitle">My Story</h1>
                <p className="about-meSubtitle">This is a subtitle that I need to write out later.</p>
                <p className="about-meDescription">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, sapiente delectus dolore animi vero doloribus esse maiores voluptate id consectetur nostrum blanditiis veniam dolor facilis adipisci ipsa laborum? Voluptatem, suscipit.
                </p>
                <div class="about_buttons">
                    <a href="assets/pdf/SholaQuadri_CV (1).pdf" class="button button--flex" download
                        rel="noopener noreferrer" target="_blank">
                        Download CV<i class="uil uil-file-download button_icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;