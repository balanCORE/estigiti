import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// , Switch, Route
import Navbar from "./components/Navbar";
import "./App.scss";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import KnowHow from "./components/KnowHow";
import Experience from "./components/Experience";
import TheTeam from "./components/TheTeam";
// import GetInTouch from "./components/GetInTouch";

function App() {
  //side? width = true: width= false
  let inWidth = false;
  return (
    <div className="App">
      <Router>
        <Navbar width={inWidth} />
        <Intro />
        <Mission />
        <KnowHow />
        <Experience />
        <TheTeam />
        {/* <GetInTouch /> */}
      </Router>
    </div>
  );
}

export default App;
