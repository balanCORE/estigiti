import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./components/Intro";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import GetInTouch from "./components/GetInTouch";
import Experience from "./components/Experience";
import TheTeam from "./components/TheTeam";

// function useWindowSize() {
//   // 768, 992, 1200
//   let deviceSize;
//   function handleDeviceSize() {
//     const w = window.innerWidth;
//     if (w <= 767) {
//       deviceSize = "s";
//     } else if (w > 767 && w < 991) {
//       deviceSize = "m";
//     } else if (w >= 991 && w < 1200) {
//       deviceSize = "lg";
//     } else if (w >= 1200) {
//       deviceSize = "xlg";
//     }
//   }
//   handleDeviceSize();

//   const [size, setSize] = useState([
//     window.innerWidth,
//     window.innerHeight,
//     deviceSize,
//   ]);

//   useEffect(() => {
//     const handleResize = () => {
//       handleDeviceSize();
//       setSize([window.innerWidth, window.innerHeight, deviceSize]);
//     };
//     window.addEventListener("resize", handleResize);
//   }, []);

//   return size;
// }

function App() {
  // const size = useWindowSize();
  return (
    <div className="App">
      <Router>
        {/*size={size}*/}
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>

        {/*size={size}*/}
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
