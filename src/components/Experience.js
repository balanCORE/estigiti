import React from "react";
import { List } from "./Lists";
import "./Experience.scss";
import { TwoByOne } from "./SVG";

export default function Experience() {
  //copy&paste to data.js
  const Experience = {
    content: [
      {
        title: "Development services",
        liArr: ["C", "C++", "Python"],
      },
      {
        title: "COMPUTER VISION AND SMART COMPUTING",
        liArr: ["Tensorflow (Lite)", "PyTorch"],
      },
      {
        title: "SERVER-SIDE AND CLOUD SYSTEMS",
        liArr: ["C#", "Java", "Scala", "Python"],
      },
      {
        title: "BESPOKE LINUX-BASED SYSTEMS",
        liArr: ["Yocto", "Buildroot"],
      },
      {
        title: "REAL-TIME SYSTEMS",
        liArr: ["FreeRTOS", "Zephyr"],
      },
      {
        title: "CLOUD ENVIRONMENTS",
        liArr: ["AWS", "Microsoft Azure"],
      },
    ],
  };
  //copy&paste to data.js

  return (
    <section className="experience">
      <aside></aside>
      <main>
        <h2>Experience {"{"}</h2>
        <div className="list-container">
          {Experience.content.map((item, index) => {
            return (
              <div className="list-card" key={index}>
                <h4>{item.title}</h4>
                <List liArr={item.liArr} />
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <TwoByOne color="#ffffff" />
      </footer>
    </section>
  );
}
