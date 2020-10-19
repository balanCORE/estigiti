import React from "react";
import { ULlinks } from "./Lists";
import { Navbar } from "./Data";

export default function NavSide() {
  return (
    <div className="navtop">
      <div className="menu-main">
        <ULlinks class="page-links" liArr={Navbar.pageLinks} />
        <ULlinks class="social-links" liArr={Navbar.socialLinks} />
      </div>
    </div>
  );
}
