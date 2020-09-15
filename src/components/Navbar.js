import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOpen, MenuClose } from "./Hamburger";
import logo from "../images/logo.svg";
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
    <div>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <MenuOpen /> : <MenuClose />}
          </div>
          <ul className={!click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/mission" className="nav-links" onClick={closeMenu}>
                Mission
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/expertise" className="nav-links" onClick={closeMenu}>
                Expertise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-links" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/theTeam" className="nav-links" onClick={closeMenu}>
                The Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/getInTouch" className="nav-links" onClick={closeMenu}>
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
