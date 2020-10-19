import React, { useState } from "react";
import { MenuClose, MenuOpen } from "./Hamburger";
import { ULlinks } from "./Lists";
import "./NavTop.scss";
import { Two } from "./SVG";
import { Navbar } from "./Data";

export default function NavTop() {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="navtop">
      <div className="menu-icon" onClick={handleClick}>
        {click ? <MenuOpen /> : <MenuClose />}
      </div>
      {!click && (
        <div className="menu-open">
          <div className="menu-main">
            <ULlinks class="page-links" liArr={Navbar.pageLinks} />
            <ULlinks class="social-links" liArr={Navbar.socialLinks} />
          </div>
          <div className="menu-foot">
            <Two color="#ffffff" />
            {/* ta stopka musi być oddzielnym elementem bo powtarza się przy get in touch na dole przy desktopach */}
            <p>Privacy & Cookies Policy</p>
            <p>©2020 by Estigiti. </p>
          </div>
        </div>
      )}
    </div>
  );
}
