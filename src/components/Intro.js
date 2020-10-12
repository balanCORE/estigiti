import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Intro.scss";
import { Three, Two } from "./SVG";

export default function Intro() {
  const typist = useRef(null);
  const svgs = useRef(null);

  useEffect(() => {
    console.clear();
    const headerArr = typist.current.children;
    const [svgUp, svgDown] = svgs.current.children;

    const [lineUpUp, lineUpDown] = svgUp.children;
    console.log([svgUp.children]);
    //TEST

    // gsap.set(lineUpUp, { x: "0" });
    gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .fromTo(
        [svgUp.children, svgDown.children],
        { x: "-=100" },
        { duration: 0.5, x: "+=100", stagger: 0.3 }
      );
    //TEST
    gsap.set(headerArr, { color: "black" });
    gsap
      .timeline({ defaults: { ease: "power4.in" } })
      .to(headerArr, { duration: 2, color: "white", stagger: 0.05 });
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
        <p>
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
        </p>
        <Three color="white" class="intro-foot-svg" />
      </footer>
    </section>
  );
}
