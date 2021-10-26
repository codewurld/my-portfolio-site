import React from "react";
import "./navbar.scss"
import Person from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Darkmode from "../darkmode/Darkmode";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Navbar = ({ openMenu, setOpenMenu }) => {

    // call ThemeContext
    const theme = useContext(ThemeContext)
    // call darkmode state in useContext from context.js file
    const darkMode = theme.state.darkMode

    return (
        //openMenu original state is false so nothing changes
        <div className={"navbar " + (openMenu && "active")} style={{ backgroundColor: darkMode && "black" }} >
            <div className="container">
                <div className="leftContainer">
                    <a href="/" className="myLogo" style={{ color: darkMode && "#fff" }} >SQ.</a>

                </div>
                <Darkmode />

                <div className="rightContainer" >
                    {/* open menu list when hamburger is clicked, using setOpenMenu function */}
                    <div className="hamburgerMenu" onClick={() => setOpenMenu(!openMenu)} >
                        <span className="firstLine" style={{ color: darkMode && "blue" }}></span>
                        <span className="secondLine"></span>
                        <span className="thirdLine"></span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;