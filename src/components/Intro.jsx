import React from "react";
import { Three, Two } from "./SVG";
import "./Intro.css";
import Typist from "react-typist";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Intro(props) {
  // const motto = createRef();
  // useEffect(() => {
  //   gsap.to(motto.current, { color: "#8c0", duration: 3 });
  // }, [motto]);

  return (
    <section className="intro" ref={props.refer} id="section-1">
      <div className="s-top">
        <Two color="white" class="intro-top-svg-1" width="100%" />
        <Two color="white" class="intro-top-svg-2" width="100%" />
      </div>

      <div className="s-main">
        <Typist>
          <p className="motto">
            Live up to your full potential. Listen. Reflect. Outdo.
          </p>
        </Typist>
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
