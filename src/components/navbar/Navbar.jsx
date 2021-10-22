import React from "react";
import "./navbar.scss"
import Person from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Navbar = ({ openMenu, setOpenMenu }) => {
    return (
        //openMenu original state is false so nothing changes
        <div className={"navbar " + (openMenu && "active")}>
            <div className="container">
                <div className="leftContainer">
                    <a href="#welcome" className="myLogo">S.</a>

                </div>

                <div className="rightContainer">
                    {/* when hamburger is clicked, run setOpenMenu function with opposite state of current openMenu */}
                    <div className="hamburgerMenu" onClick={() => setOpenMenu(!openMenu)}>
                        <span className="firstLine"></span>
                        <span className="secondLine"></span>
                        <span className="thirdLine"></span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;