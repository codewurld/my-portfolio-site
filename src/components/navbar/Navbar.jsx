import React from "react";
import "./navbar.scss"
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
                    <div className="hamburgerMenu" style={{ color: darkMode && "#fff" }} onClick={() => setOpenMenu(!openMenu)} >
                        <span className="firstLine" style={{ color: darkMode && "#fff" }}></span>
                        <span className="secondLine" style={{ color: darkMode && "#fff" }}></span>
                        <span className="thirdLine"></span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;