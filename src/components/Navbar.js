import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import NavSide from "./NavSide";
import NavTop from "./NavTop";
import "./Navbar.scss";

export default function Navbar({ width }) {
  return (
    <nav className="navbar">
      <div className="logo-bg">
        <Logo />
      </div>
      {/* RWD  */}
      {/* <div
        className="width"
        style={{
          height: "2rem",
          width: "20vw",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: "0",
          left: "40vw",
          zIndex: "10000000",
        }}
      >
        <p style={{ color: "white", fontSize: "3rem" }}>width: {width}</p>
      </div> */}
      {/* RWD */}

      {width < 992 ? <NavTop /> : <NavSide />}
    </nav>
  );
}
