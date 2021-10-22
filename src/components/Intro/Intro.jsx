import "./intro.css"
import Button from '../Button/Button'


const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-container">
                    <h2 className="intro-greeting">Hi, I'm</h2>
                    <h1 className="intro-name">Shola Quadri</h1>
                    <div className="intro-title">
                        <div className="intro-title-container">
                            <div className="intro-title-item">Software Developer</div>
                            <div className="intro-title-item">UX/UI Designer</div>
                            <div className="intro-title-item">Speaker</div>
                            <div className="intro-title-item">Learner</div>
                        </div>
                    </div>
                    {/* <Button /> */}
                    <p className="intro-description">
                        I design and develop services for customers of all sizes, specialising in creating stylish, modern websites, web servies and online stores.
                    </p>
                </div>
            </div>
            <div className="intro-right">
                <div className="image-bg">

                </div>
                <img src="/assets/shola_hat.png" alt="a picture of Shola" className="intro-img" /></div>
        </div>
    );
}

export default Intro;