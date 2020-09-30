import React from "react";
import { Two } from "./SVG";
import "./Intro.css";

export default function Intro(props) {
  return (
    <section className={`intro`}>
      <div className="s-top">
        <Two color="white" class="intro-top-svg-1" width="100%" />
        <Two color="white" class="intro-top-svg-2" width="100%" />
      </div>

      <div className="s-main">
        <p className="motto">
          {/* width: {width} <br />
          height: {height} <br />
          size: {sizem} */}
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
      </div>
    </section>
  );
}
