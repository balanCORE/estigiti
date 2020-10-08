import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import GetInTouch from "./components/GetInTouch";
import Experience from "./components/Experience";
import TheTeam from "./components/TheTeam";

function App() {
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
