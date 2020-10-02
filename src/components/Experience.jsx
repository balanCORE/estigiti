import React from "react";
import { TwoByOne } from "./SVG";
import { Sections } from "./Data";
import "./Experience.css";
const data = Sections.Experience.sMain.content;

export default function Experience() {
  return (
    <section className="experience">
      <div className="s-top"></div>
      <div className="s-main">
        <div className="experience-header header-container">
          <h2 className="header">Experience {"{"}</h2>
        </div>
        <div className="list-container experience-list">
          {data.map((content, index) => {
            return (
              <div className="experience-list-sections" key={index}>
                <h4 className="list-title">{content.title}</h4>
                <ul className="list">
                  {content.contentArr.map((item, index) => {
                    return (
                      <li className="list-item" key={index}>
                        <p className="list-text">{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="s-foot">
        <TwoByOne color="white" class="experience-foot-svg" />
      </div>
    </section>
  );
}
