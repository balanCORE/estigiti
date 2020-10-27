import React from "react";
import VideoBackGround from "../video/code_400x750_v1.mp4";

import { ULlinks } from "./Lists";
import { Navbar } from "./Data";
import "./NavSide.scss";

export default function NavSide() {
  return (
    <div className="navside">
      <div className="menu-main">
        <ULlinks class="page-links" liArr={Navbar.pageLinks} />
        <ULlinks class="social-links" liArr={Navbar.socialLinks} />
      </div>
      <div className="video-cover"></div>
      <div className="video-box">
        <div className="logo-bg"></div>
        <video autoPlay muted loop id="Video-background">
          <source src={VideoBackGround} type="video/mp4" />
        </video>
        <video autoPlay muted loop id="Video-background">
          <source src={VideoBackGround} type="video/mp4" />
        </video>
        <video autoPlay muted loop id="Video-background">
          <source src={VideoBackGround} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
