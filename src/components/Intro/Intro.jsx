import "./intro.css"
import Button from '../Button/Button'
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Intro = () => {

    // call ThemeContext
    const theme = useContext(ThemeContext)
    // call darkmode state in useContext from context.js file
    const darkMode = theme.state.darkMode


    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-container">
                    <h2 className="intro-greeting" style={{ color: darkMode && "#fff" }}>Hi, I'm</h2>
                    <h1 className="intro-name" style={{ color: darkMode && "#fff" }}>Shola Quadri</h1>
                    <div className="intro-title">
                        <div className="intro-title-container">
                            <div className="intro-title-item">Software Developer</div>
                            <div className="intro-title-item">UX/UI Designer</div>
                            <div className="intro-title-item">Speaker</div>
                            <div className="intro-title-item">Learner</div>
                        </div>

                    </div>
                    {/* <p className="intro-description">
                        I design and develop services for customers of all sizes, specialising in creating stylish, modern websites, web servies and online stores.
                    </p> */}

                    <a href="/contact" className="button button--flex" style={{ backgroundColor: darkMode && "#000" }} onMouseOver="this.style.color='#fff'" >
                        Let's connect <i className="uil uil-navigator button_icon"></i>
                    </a>
                </div>


            </div>
            <div className="intro-right">
                <div className="image-bg" style={{ backgroundColor: darkMode && "#fff" }}>

                </div>
                <img src="/assets/shola_hat.png" alt="a picture of Shola" className="intro-img" /></div>
        </div>
    );
}

export default Intro;