import React, { useState } from "react";
import { MenuOpen, MenuClose } from "./Hamburger";
import logo from "../images/logo.svg";
import VideoBackGround from "../video/code_400x750_v1.mp4";
import { Two } from "./SVG";
import { Navbar as NavData } from "./Data";
import ULlinks from "./ULlinks";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMenu = () => {
    setClick(true);
  };

  return (
    <div className={click ? "navbar" : "navbar active"}>
      <div className="video-cover"></div>
      <div className="joist">
        {/* <Logo className="logo-svg" /> */}
        <img src={logo} alt="logo" className="logo-svg" />
        {/* RWD */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <MenuOpen /> : <MenuClose />}
        </div>
      </div>
      <div className="video-box">
        <video autoPlay muted loop id="Video-background">
          <source src={VideoBackGround} type="video/mp4" />
        </video>
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
          <Two color="#ffffff" />
          <p className="privacy-policy">Privacy & Cookies Policy</p>
          <p className="copyrights">©2020 by Estigiti. </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
