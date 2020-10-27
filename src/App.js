import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// , Switch, Route
import "./App.scss";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import KnowHow from "./components/KnowHow";
import Experience from "./components/Experience";
import TheTeam from "./components/TheTeam";
import GetInTouch from "./components/GetInTouch";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [sectionMargin, setSectionMargin] = useState({
    section: String,
    ver: String,
    hor: String,
  });

  document.documentElement.style.setProperty("--mr-l", sectionMargin.section);
  document.documentElement.style.setProperty("--mar-ver", sectionMargin.ver);
  document.documentElement.style.setProperty("--mar-hor", sectionMargin.hor);

  function handleResize() {
    const width = window.innerWidth;
    setWidth(width);
    handleMargin(width);
  }
  const handleMargin = (rwd) => {
    rwd <= 991
      ? setSectionMargin({
          section: "0",
          ver: "3rem",
          hor: "3.2rem",
        })
      : rwd > 991 && rwd < 1200
      ? setSectionMargin({
          section: "21.9rem",
          ver: "3rem",
          hor: "3.2rem",
        })
      : rwd >= 1200 &&
        setSectionMargin({
          section: "32rem",
          ver: "3.5rem",
          hor: "8.7rem",
        });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <div className="App">
      <Router>
        <Navbar width={width} />
        <Intro width={width} />
        <Mission />
        <KnowHow />
        <Experience />
        {/* width ma dać moliwość najechania na osobę i pokazania w jakich areach jest odpowiedzialny */}
        <TheTeam />
        <GetInTouch />
      </Router>
    </div>
  );
}

export default App;
