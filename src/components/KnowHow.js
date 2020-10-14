import React, { useEffect, useRef } from "react";
import "./KnowHow.scss";
import { Three, Two } from "./SVG";
import { List } from "./Lists";
import gsap from "gsap/gsap-core";

export default function Expertise() {
  const knowHowSvg = useRef(null);

  useEffect(() => {
    const [svgUp] = knowHowSvg.current.children;

    gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .fromTo(
        [svgUp.children],
        { x: "-=100" },
        { duration: 0.5, x: "+=100", stagger: 0.3 }
      );
  }, []);
  // copy&pase to data.js
  console.log("expertise data copy&pase");
  const Expertise = {
    content: {
      title: "Development services",
      liArr: [
        "Connected embedded systems & Internet of Things",
        "Embedded & Edge AI, Computer Vision",
        "Cloud-native data processing pipelines",
        "Technology evaluation, PoCs, MVPs, and product development",
      ],
    },
  };

  // copy&pase to data.js

  return (
    <section className="expertise">
      <aside ref={knowHowSvg}>
        <Two color="#ffffff" />
      </aside>
      <main>
        <h2>Know-how {"{"}</h2>
        <div className="list-container">
          <h4>{Expertise.content.title}</h4>
          <List liArr={Expertise.content.liArr} class="expertise-ul" />
        </div>
      </main>
      <footer>
        <Three color="#ffffff" />
      </footer>
    </section>
  );
}
