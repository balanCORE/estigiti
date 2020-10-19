import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Intro.scss";
import { Three, Two } from "./SVG";

export default function Intro() {
  const typist = useRef(null);
  const svgs = useRef(null);
  // heave to trigger x2 before 100 or have to make a change with onload
  useEffect(() => {
    const headerArr = typist.current.children;
    const [svgUp, svgDown] = svgs.current.children;

    gsap.set(headerArr, { color: "black" });
    gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .fromTo(
        [svgUp.children, svgDown.children],
        { transform: "matrix(1,0,0,1,-100,0)", autoAlpha: 0 },
        {
          duration: 0.5,
          transform: "matrix(1,0,0,1,0,0)",
          autoAlpha: 1,
          stagger: 0.3,
        },
        "Start"
      )
      .to(headerArr, { duration: 2, color: "white", stagger: 0.05 }, "Start");
  }, []);

  return (
    <section className="intro">
      <aside ref={svgs}>
        <Two color="#ffffff" />
        <Two color="#ffffff" />
      </aside>
      <main>
        <h2 ref={typist}>
          <span>L</span>
          <span>i</span>
          <span>v</span>
          <span>e</span>
          <span> </span>
          <span>u</span>
          <span>p</span>
          <span> </span>
          <span>t</span>
          <span>o</span>
          <span> </span>
          <span>y</span>
          <span>o</span>
          <span>u</span>
          <span>r</span>
          <span> </span>
          <span>f</span>
          <span>u</span>
          <span>l</span>
          <span>l</span>
          <span> </span>
          <span>p</span>
          <span>o</span>
          <span>t</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
          <span>i</span>
          <span>a</span>
          <span>l</span>
          <span>.</span>
          <br />
          <span>L</span>
          <span>i</span>
          <span>s</span>
          <span>t</span>
          <span>e</span>
          <span>n</span>
          <span>.</span>
          <span> </span>
          <span>R</span>
          <span>e</span>
          <span>f</span>
          <span>l</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>.</span>
          <span> </span>
          <span>O</span>
          <span>u</span>
          <span>t</span>
          <span>d</span>
          <span>o</span>
          <span>.</span>
        </h2>
      </main>
      <footer>
        <div className="intro-todo">
          *estigi {"{vb}"} - to bring into being
          <span>&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;</span>
          to cause
          <span>&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;</span>
          to create
          <span>&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;</span>
          to develop
          <span>&nbsp;&nbsp;</span>|<span>&nbsp;&nbsp;</span>
          to make
          <p>
            <span>&nbsp;&nbsp;</span>/<span>&nbsp;&nbsp;</span>
            esperanto
          </p>
        </div>
        <Three color="white" class="intro-foot-svg" />
      </footer>
    </section>
  );
}
