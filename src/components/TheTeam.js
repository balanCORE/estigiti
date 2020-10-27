import React, { useEffect, useRef } from "react";
import { Three, ThreeByTwo } from "./SVG";
import "./TheTeam.scss";
import { Team } from "./Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TheTeam() {
  const theTeam = useRef(null);
  const teamAside = useRef(null);
  const teamMain = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const teamSection = theTeam.current.children;
    const [Aside] = teamAside.current.children;
    const Main = teamMain.current.children;

    gsap
      .timeline({ defaults: { ease: "power1.inOut" } })
      .set(Main, { y: "-100", autoAlpha: 0 })
      .set(Aside.children, {
        autoAlpha: 0,
        transform: "matrix(1,0,0,1,-100,0)",
      })

      .to(teamSection, {
        scrollTrigger: {
          trigger: ".theteam",
          start: "10% 80%",
          onEnter: () => {
            gsap
              .timeline()
              .to(
                Aside.children,
                {
                  duration: 0.5,
                  transform: "matrix(1,0,0,1,0,0)",
                  stagger: 0.3,
                  autoAlpha: 1,
                },
                "svgAnim"
              )
              .to(
                Main,
                {
                  y: "0",
                  duration: 0.5,
                  stagger: 0.2,
                  autoAlpha: 1,
                },
                "svgAnim"
              );
          },
        },
      });
    // .fromTo(Main, {}, { duration: 1 });
  }, []);

  return (
    <section className="theteam" ref={theTeam}>
      <aside ref={teamAside}>
        <Three color="#ffffff" />
      </aside>
      <main ref={teamMain}>
        <h2>The Team {"{"}</h2>
        <div className="team-container">
          {Team.map((person, index) => {
            return (
              <div className="team-card" key={index}>
                <div className="photo">
                  <img src={person.src} alt={person.name} />
                  {/* if width ok than = > */}
                  <div className="photo-overlay">
                    <h5 className="area">{person.area}</h5>
                    <ul className="overlay-list">
                      {person.responsibleOf.map((items, index) => {
                        return <li key={`${items}-${index}`}>{items}</li>;
                      })}
                    </ul>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="contact-box-up">
                    <p className="name">{person.name}</p>
                    <p className="function">{person.function}</p>
                  </div>
                  <div className="contact-box-down">
                    <p className="email">{person.email}</p>
                    <p className="phone">{person.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <ThreeByTwo color="#ffffff" />
      </footer>
    </section>
  );
}
