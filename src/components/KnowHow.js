import React, { useEffect, useRef } from "react";
import "./KnowHow.scss";
import { Three, Two } from "./SVG";
import { List } from "./Lists";
import { KnowHow } from "./Data";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Expertise() {
  gsap.registerPlugin(ScrollTrigger);
  const knowHow = useRef(null);
  const knowHowSvg = useRef(null);
  const knowHowSvgFooter = useRef(null);

  useEffect(() => {
    const [svgUp] = knowHowSvg.current.children;
    const knowHowSection = knowHow.current.children;
    const [svgDown] = knowHowSvgFooter.current.children;

    gsap.set([svgUp.children], {
      transform: "matrix(1,0,0,1,-100,0)",
      autoAlpha: 0,
    });
    gsap.set([svgDown.children], {
      transform: "matrix(1,0,0,1,-100,0)",
      autoAlpha: 0,
    });

    gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .to(knowHowSection, {
        scrollTrigger: {
          trigger: ".know-how",
          start: "-30% 50%",
          end: "20% 50% ",
          onEnter: () => {
            gsap.to([svgUp.children], {
              transform: "matrix(1,0,0,1,0,0)",
              autoAlpha: 1,
              duration: 0.5,
              stagger: 0.2,
              ease: "power1.inOut",
            });
          },
        },
      })
      .to(knowHowSection, {
        scrollTrigger: {
          trigger: ".know-how",
          start: "25% 45%",
          onEnter: () => {
            gsap.to([svgDown.children], {
              transform: "matrix(1,0,0,1,0,0)",
              autoAlpha: 1,
              duration: 0.5,
              stagger: 0.2,
              ease: "power1.inOut",
            });
          },
        },
      });
  }, []);

  return (
    <section className="know-how" ref={knowHow}>
      <aside ref={knowHowSvg}>
        <Two color="#ffffff" />
      </aside>
      <main>
        <h2>Know-how {"{"}</h2>
        <div className="list-container">
          <h4>{KnowHow.content.title}</h4>
          <List liArr={KnowHow.content.contentArr} class="expertise-ul" />
        </div>
      </main>
      <footer ref={knowHowSvgFooter}>
        <Three color="#ffffff" />
      </footer>
    </section>
  );
}
