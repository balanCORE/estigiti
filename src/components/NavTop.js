import React, { useState } from "react";
import { MenuClose, MenuOpen } from "./Hamburger";
import { ULlinks } from "./Lists";
import "./NavTop.scss";
import { Two } from "./SVG";

export default function NavTop() {
  // copy&paste to data.js
  const Navbar = {
    pageLinks: [
      { pageName: "Mission", pageAnchor: "" },
      { pageName: "Expertise", pageAnchor: "" },
      { pageName: "Experience", pageAnchor: "" },
      { pageName: "The Team", pageAnchor: "" },
      { pageName: "Get In Touch", pageAnchor: "" },
    ],
    socialLinks: [
      { pageName: "Facebook", pageAnchor: "" },
      { pageName: "LinkedIn", pageAnchor: "" },
      { pageName: "Instagram", pageAnchor: "" },
      { pageName: "Twitter", pageAnchor: "" },
      { pageName: "YouTube", pageAnchor: "" },
    ],
  };
  // copy&paste to data.js

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
            <p>Privacy & Cookies Policy</p>
            <p>©2020 by Estigiti. </p>
          </div>
        </div>
      )}
    </div>
  );
}
