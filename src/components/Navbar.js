import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import NavSide from "./NavSide";
import NavTop from "./NavTop";
import "./Navbar.scss";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo-bg">
        <Logo />
      </div>
      {props.width ? <NavSide /> : <NavTop />}
    </nav>
  );
}
