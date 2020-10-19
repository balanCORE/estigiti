import React, { useEffect, useRef } from "react";
import "./Mission.scss";
import { Three } from "./SVG";
import Button from "./Button";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Mission() {
  gsap.registerPlugin(ScrollTrigger);
  const missionSvg = useRef(null);
  const mission = useRef(null);

  useEffect(() => {
    const [svgUp, svgDown] = missionSvg.current.children;
    const missionSection = mission.current.children;
    gsap.set([svgUp.children, svgDown.children], {
      transform: "matrix(1,0,0,1,-100,0)",
      autoAlpha: 0,
    });

    gsap.to(missionSection, {
      scrollTrigger: {
        trigger: ".mission",
        start: "-30% 50%",
        end: "20% 50% ",
        onEnter: () => {
          gsap.to([svgUp.children, svgDown.children], {
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
    <section className="mission" ref={mission}>
      <aside ref={missionSvg}>
        <Three />
        <Three />
      </aside>
      <main>
        <h2>
          From a very first day on the mission to provide the best possible
          remote team and talent experience to CTOs/VPs of Engineering
        </h2>
        <Button link="" text="CURIOUS HOW?" />
      </main>
      <footer></footer>
    </section>
  );
}
