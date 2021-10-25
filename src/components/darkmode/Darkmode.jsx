import './darkmode.css'
import { useContext } from 'react';
import { ThemeContext } from '../../context';


const Darkmode = () => {

    const theme = useContext(ThemeContext)

    // when button is clicked, dispatch from context.js toggles 
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className="dark-mode">
            <img src="./assets/sun.png" alt="" className="dark-mode-icon" />
            <img src="./assets/moon.png" alt="" className="dark-mode-icon" />
            <div className="dark-mode-button" onClick={handleClick}
                style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    );
}


// button position changes depending on darkmode state
export default Darkmode;