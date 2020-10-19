import React, { useEffect, useRef } from "react";
import { List } from "./Lists";
import "./Experience.scss";
import { TwoByOne } from "./SVG";
import { Experience as Exp } from "./Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  gsap.registerPlugin(ScrollTrigger);
  const experience = useRef(null);
  const expMain = useRef(null);
  const expFoot = useRef(null);

  useEffect(() => {
    const [header, list] = expMain.current.children;
    const [svg] = expFoot.current.children;
    const expSection = experience.current.children;

    gsap.set([header, list.children], {
      y: "-=100",
      autoAlpha: 0,
    });

    gsap.to(expSection, {
      scrollTrigger: {
        trigger: ".experience",
        start: "10% 70%",
        onEnter: () => {
          gsap.to([header, list.children], {
            y: "0",
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "power1.inOut",
          });
          gsap.fromTo(
            // animuje się za kazdym razem
            svg.children,
            {
              autoAlpha: 0,
              transform: "matrix(1,0,0,1,-100,0)",
            },
            {
              duration: 0.5,
              stagger: 0.2,
              transform: "matrix(1,0,0,1,0,0)",
              autoAlpha: 1,
            }
          );
        },
      },
    });
  }, []);
  return (
    <section className="experience" ref={experience}>
      <aside></aside>
      <main ref={expMain}>
        <h2>Experience {"{"}</h2>
        <div className="list-container">
          {Exp.content.map((item, index) => {
            return (
              <div className="list-card" key={index}>
                <h4>{item.title}</h4>
                <List liArr={item.contentArr} />
              </div>
            );
          })}
        </div>
      </main>
      <footer ref={expFoot}>
        <TwoByOne color="#ffffff" />
      </footer>
    </section>
  );
}
