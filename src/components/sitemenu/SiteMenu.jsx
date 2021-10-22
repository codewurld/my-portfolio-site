import React from "react";
import "./sitemenu.scss"


const SiteMenu = ({ openMenu, setOpenMenu, autoclose }) => {
    return (
        //openMenu original state is false so nothing changes
        <div className={"siteMenu " + (openMenu && "active")}>
            <ul>

                {/* need to refactor lis onClicks later for DRY */}
                {/* setOpenMenu is false makes siteMenu class on line 8 !active */}
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#welcome">Home</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#skills">Skills</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#projects">Portfolio</a>
                </li>

                <li onClick={() => setOpenMenu(false)}>
                    <a href="#interests">About Me</a>
                </li>
                <li onClick={() => setOpenMenu(false)}>
                    <a href="#contact">Contact</a>
                </li>

            </ul>

        </div>
    );
}

export default SiteMenu;