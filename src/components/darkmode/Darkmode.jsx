import './darkmode.css'
import { UilSunset } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'


const Darkmode = () => {
    return (
        <div className="dark-mode">
            <img src="./assets/sun.png" alt="" className="dark-mode-icon" />
            <img src="./assets/moon.png" alt="" className="dark-mode-icon" />
            <div className="dark-mode-button"></div>
        </div>
    );
}

export default Darkmode;