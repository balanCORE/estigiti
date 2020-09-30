import React from "react";
import { Three, ThreeByTwo } from "./SVG";
import { Team } from "./Data";
import TeamCard from "./TeamCard";
import "./TheTeam.css";

export default function TheTeam(props) {
  return (
    <section className="the-team">
      <div className="s-top">
        <Three color="white" />
      </div>
      <div className="s-main">
        <div className="the-team-header header-container">
          <h2 className="header">The Team {"{"}</h2>
        </div>
        <div className="team-container">
          {Team.map((person, index) => {
            return (
              <TeamCard
                src={person.src}
                function={person.function}
                area={person.area}
                responsibleOf={person.responsibleOf}
                name={person.name}
                email={person.email}
                phone={person.phone}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="s-foot">
        <ThreeByTwo color="white" class="the-team-foot-svg" />
      </div>
    </section>
  );
}
