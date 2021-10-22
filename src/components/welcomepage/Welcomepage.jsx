import React from "react";
import "./welcomepage.scss"
// import sholaHeadshot from '../../../public/assets/sholaHeadshot'

const WelcomePage = () => {

    // create useRef to be passed as target logic into #animated-text 
    // const animatedTextRef = useRef();

    // trigger text animation with ityped as an effect
    // useEffect(() => {
    //     init(animatedTextRef.current, {
    //         showCursor: false,
    //         strings: ["Developer", "Marketer"]
    //     })
    // }, [])

    return (
        <div className="welcome" id="welcome">
            {/* image and background */}
            <div className="left-page">
                <div className="imageHolder">

                    {/* <img src="assets/blob.svg" alt="blob" /> */}
                    <img src="assets/shola_hat.png" alt="" />
                    {/* <img className="home_blob-img" x="12" y="42" xlink:href="assets/img/shola_headshot_1-removebg-preview.png /> */}
                </div>
            </div>
            {/* Text introduction */}
            <div className="right-page" >
                <div className="wrapper">
                    <h2>Hi, I'm Shola</h2>
                    <h1></h1>
                    {/* <h3>Junior Software  <span id="animated-text" ref={animatedTextRef}></span>Developer</h3> */}
                    <h3 className="subtitle">Software  <span id="animated-text">Developer</span></h3>
                    <a href="#contact" className="button button--flex">
                        Let's connect <i className="uil uil-navigator button_icon"></i>
                    </a>
                    {/* <a className="down_arrow" href="#projects">
                        <img src="assets/down-arrow.png" alt="down-arrow" />
                    </a> */}
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;