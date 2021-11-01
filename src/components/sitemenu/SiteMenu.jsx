import React from "react";
import "./sitemenu.scss"
import { Link } from "react-router-dom";


const SiteMenu = ({ openMenu, setOpenMenu, autoclose }) => {
    return (
        //openMenu original state is false so nothing changes
        <div className={"siteMenu " + (openMenu && "active")}>
            <ul>

                {/* need to refactor lis onClicks later for DRY */}
                {/* setOpenMenu is false makes siteMenu class on line 8 !active */}
                <li onClick={() => setOpenMenu(false)}>
                    <a href="/">Home</a>
                </li>
                {/* <li onClick={() => setOpenMenu(false)}>
                    <a href="/skills">Skills</a>
                </li> */}
                <li onClick={() => setOpenMenu(false)}>
                    <a href="/portfolio">Portfolio</a>
                </li>

                <li onClick={() => setOpenMenu(false)}>
                    <a href="/my-story">About Me</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="/contact">Contact</a>
                </li>

            </ul>

        </div>
    );
}

export default SiteMenu;