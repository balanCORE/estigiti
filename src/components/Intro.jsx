import React, { useRef, useEffect } from "react";
import { Three, Two } from "./SVG";
import "./Intro.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Intro(props) {
  const introTopSVG = useRef(null);
  useEffect(() => {
    const [svg1, svg2] = introTopSVG.current.children;

    gsap.set(svg1, { transformOrigin: "0 0", autoAlpha: 0 });
    gsap.set(svg2, { transformOrigin: "0 0", autoAlpha: 0 });

    const tl = gsap.timeline({
      defaults: { ease: "sine.inOut" },
    });
    tl.fromTo(
      svg1,
      { x: "-=100%" },
      { duration: 1, x: "+=100%", autoAlpha: 1 }
    ).fromTo(svg2, { x: "-=100%" }, { duration: 1, x: "+=100%", autoAlpha: 1 });
  }, []);

  return (
    <section className="intro" ref={props.refer} id="section-1">
      <div className="s-top" ref={introTopSVG}>
        <Two
          color="white"
          class="intro-top-svg-1"
          id="introTopSVG-1"
          width="100%"
        />
        <Two
          color="white"
          class="intro-top-svg-2"
          id="introTopSVG-2"
          width="100%"
        />
      </div>

      <div className="s-main">
        <div className="motto">
          Live up to your full potential. Listen. Reflect. Outdo.
        </div>
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
