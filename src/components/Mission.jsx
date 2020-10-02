import React from "react";
import { Three } from "./SVG";
import Button from "./Button";
import "./Mission.css";

export default function Mission() {
  return (
    <section className="mission">
      <div className="s-top">
        <Three color="#FFA300" />
        <Three color="#FFA300" class="mission-top-svg" />
      </div>

      <div className="s-main">
        <div className="mission-header header-container">
          <h2 className="header">
            From a very first day on the mission to provide the best possible
            remote team and talent experience to{" "}
            <span>CTOs/VPs of Engineering</span>
          </h2>
        </div>
        <Button link="/" text="CURIOUS HOW?" />
      </div>

      <div className="s-foot"></div>
    </section>
  );
}
