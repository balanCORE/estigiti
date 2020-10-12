import React from "react";
import "./Mission.scss";
import { Three } from "./SVG";
import Button from "./Button";

export default function Mission() {
  return (
    <section className="mission">
      <aside>
        <Three />
        <Three />
      </aside>
      <main>
        <h2>
          From a very first day on the mission to provide the best possible
          remote team and talent experience to CTOs/VPs of Engineering
        </h2>
        <Button link="" text="CURIOUS HOW?" />
      </main>
      <footer></footer>
    </section>
  );
}
