import './aboutme.css'
import { useContext } from "react"
import { ThemeContext } from "../../context"

const AboutMe = () => {

    var link = <a href="https://nutri-glow.netlify.app/">NutriGlow</a>;


    // call ThemeContext
    const theme = useContext(ThemeContext)
    // call darkmode state in useContext from context.js file
    const darkMode = theme.state.darkMode


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
                <h1 className="about-meTitle" style={{ color: darkMode && "#fff" }}>My Story</h1>
                <p className="about-meSubtitle">As a Software Developer, I dedicate most of my time learning new technologies and improving my skills to create aesthetically pleasing and functional web apps/sites that solves real life problems for users.</p>
                {/* <p className="about-me-alt">A musician and marketer turned software developer.</p> */}
                <p className="about-meDescription">
                    I learnt how to become a developer through the School of Code bootcamp, where we worked regularly in agile teams on real life projects whilst learning and putting to practice new skills, i.e. MERN stack, Testing, APIs, Figma, the entire SDLC, etc.
                </p>
                <p className="about-meDescription">
                    My favourite project on the bootcamp was {link}, a pregnancy health and nutrition app, built for a NHS affiliated client. This app had a sign up feature (implemented with Firebase) which allowed our users to get suitable advice, tips and support during their motherhood journey. We demo’d this app at the end of the bootcamp and received great feedback, including from our target audience who were keen on trying out the app for themselves.
                </p>
                <p className="about-meDescription">
                    Now that I've "graduated", I finally have a career I love, and I can't wait for the opportunity to use the skills I’ve honed at the School of Code to kickstart my new career as a full-stack developer in my first software engineering role.
                </p>
                <p className="about-meDescription">
                    And when I’m not coding, you’ll probably find me at tech meetups and conferences, both as a participant and speaker (i.e. Web Summit, BrumJS, etc.), keeping up with the latest developments and sharing my experiences. I also enjoy reading, meditation, volunteering, music, songwriting and travelling.
                </p>
                <div class="about_buttons">
                    <a href="assets/SholaQuadri_Tech_CV (2).pdf" class="button button--flex" download
                        rel="noopener noreferrer" target="_blank">
                        Download CV<i class="uil uil-file-download button_icon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;