import React from "react";
import "./Expertise.scss";
import { Three, Two } from "./SVG";
import { List } from "./Lists";

export default function Expertise() {
  // copy&pase to data.js
  const Expertise = {
    content: {
      title: "Development services",
      liArr: [
        "Connected embedded systems & Internet of Things",
        "Embedded & Edge AI, Computer Vision",
        "Cloud-native data processing pipelines",
        "Technology evaluation, PoCs, MVPs, and product development",
      ],
    },
  };

  // copy&pase to data.js

  return (
    <section className="expertise">
      <aside>
        <Two color="#ffffff" />
      </aside>
      <main>
        <h2>Expertise {"{"}</h2>
        <div className="list-container">
          <h4>{Expertise.content.title}</h4>
          <List liArr={Expertise.content.liArr} class="expertise-ul" />
        </div>
      </main>
      <footer>
        <Three color="#ffffff" />
      </footer>
    </section>
  );
}
