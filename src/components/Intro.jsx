import React from "react";
import { Three, Two } from "./SVG";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro">
      <div className="s-top">
        <Two color="white" class="intro-top-svg-1" width="100%" />
        <Two color="white" class="intro-top-svg-2" width="100%" />
      </div>

      <div className="s-main">
        <p className="motto">
          Live up to your full potential. Listen. Reflect. Outdo.
        </p>
      </div>

      <div className="s-foot">
        <div className="intro-p">
          *estigi {"{vb}"} - to bring into being
          <span className="break">&nbsp;&nbsp;</span>|
          <span className="break">&nbsp;&nbsp;</span>
          to cause
          <span className="break">&nbsp;&nbsp;</span>|
          <span className="break">&nbsp;&nbsp;</span>
          to create
          <span className="break">&nbsp;&nbsp;</span>|
          <span className="break">&nbsp;&nbsp;</span>
          to develop
          <span className="break">&nbsp;&nbsp;</span>|
          <span className="break">&nbsp;&nbsp;</span>
          to make
          <p>
            <span className="break">&nbsp;&nbsp;</span>/
            <span className="break">&nbsp;&nbsp;</span>
            esperanto
          </p>
        </div>
        <Three color="white" class="intro-foot-svg" />
      </div>
    </section>
  );
}
