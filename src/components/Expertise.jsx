import React from "react";
import { Sections } from "./Data";
import { Two, Three } from "./SVG";
import "./Expertise.css";
const data = Sections.Expertise.sMain.content;

export default function Expertise(props) {
  return (
    <section className="expertise">
      <div className="s-top">
        <Two color="white" class="expertise-top-svg" width="100%" />
      </div>
      <div className="s-main">
        <div className="expertise-header header-container">
          <h2 className="header">Expertise {"{"}</h2>
        </div>
        <div className="list-container expertise-list">
          <h4 className="list-title">{data.title}</h4>
          <ul className="list">
            {data.contentArr.map((item, index) => {
              return (
                <li className="list-item" key={index}>
                  <p className="list-text">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="s-foot">
        <Three color="white" class="expertise-foot-svg" />
      </div>
    </section>
  );
}
