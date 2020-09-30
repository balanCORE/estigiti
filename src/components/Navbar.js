import React, { useState } from "react";
import { MenuOpen, MenuClose } from "./Hamburger";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Two } from "./SVG";
import { Navbar as NavData } from "./Data";
import "./Navbar.css";
import ULlinks from "./ULlinks";

function Navbar(props) {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(true);
  };

  const [width, height, size] = props.size;
  return (
    <div className={`${click ? "navbar" : "navbar active"} ${size}`}>
      <div className={`joist ${size}`}>
        <Logo className="logo-svg" />
        {/* RWD */}
        {size === "s" || size === "m" ? (
          <div className="menu-icon" onClick={handleClick}>
            {click ? <MenuOpen /> : <MenuClose />}
          </div>
        ) : (
          <div className="sidebar">
            <ULlinks
              // menu-list
              class="page-list"
              liArr={NavData.pageLinks}
              handleClick={closeMenu}
            />
            <ULlinks
              // menu-list
              class="social-list"
              liArr={NavData.socialLinks}
              handleClick={closeMenu}
            />
            <div className="nav-video"></div>
          </div>
        )}
      </div>
      <div className={click ? "nav-menu" : "nav-menu active"}>
        <ULlinks
          // menu-list
          class="page-list"
          liArr={NavData.pageLinks}
          handleClick={closeMenu}
        />
        <ULlinks
          // menu-list
          class="social-list"
          liArr={NavData.socialLinks}
          handleClick={closeMenu}
        />

        <div className="menu-foot">
          {/* width -> tenObiekt.innerwidth - paddingi */}
          <Two color="#ffffff" width={`${width - 120}px`} />
          <p className="privacy-policy">Privacy & Cookies Policy</p>
          <p className="copyrights">©2020 by Estigiti. </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
