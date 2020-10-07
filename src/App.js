import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import GetInTouch from "./components/GetInTouch";
import Experience from "./components/Experience";
import TheTeam from "./components/TheTeam";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // const revealRef = useRef([]);
  // revealRef.current = [];

  // useEffect(() => {
  //   revealRef.current.forEach((el, index) => {
  //     gsap.to(el, {
  //       ease: "none",
  //       scrollTrigger: {
  //         id: `section-${index}`,
  //         trigger: el,
  //         pin: true,
  //         scrub: true,
  //         snap: 1 / 6,
  //         markers: true,
  //         start: "top ",
  //         end: () => {
  //           return "+=500px";
  //           // return `+=${revealRef.current[index].offsetHeight}`;
  //         },
  //       },
  //     });
  //   });
  // }, []);

  // const addToRef = (el) => {
  //   if (el && !revealRef.current.includes(el)) {
  //     revealRef.current.push(el);
  //   }
  // };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
        <Intro />
        <Mission />
        <Expertise />
        <Experience />
        <TheTeam />
        <GetInTouch />
      </Router>
    </div>
  );
}

export default App;
