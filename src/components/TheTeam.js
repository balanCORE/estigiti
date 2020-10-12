import React from "react";
import { Three, ThreeByTwo } from "./SVG";
import "./TheTeam.scss";
import iza from "../images/izabela_seregin.png";
import pio from "../images/piotr_jelonkiewicz.png";
import paw from "../images/pawel_pietras.png";

const Team = [
  {
    src: iza,
    function: "CEO",
    area: "People",
    responsibleOf: ["Strategy", "General management", "Marketing"],
    name: "Izabela Seregin",
    email: "izabela.seregin@estigiti.com",
    phone: "+48 602 619 159",
  },
  {
    src: paw,
    function: "COO",
    area: "Clients",
    responsibleOf: ["Partnerships", "Sales", "Support"],
    name: "Paweł Pietras",
    email: "pawel.pietras@estigiti.com",
    phone: "+48 795 192 656",
  },
  {
    src: pio,
    function: "CEO",
    area: "Technology",
    responsibleOf: ["Architectures", "Delivery", "Mentoring"],
    name: "Piotr Jelonkiewicz",
    email: "piotr.jelonkiewicz@estigiti.com",
    phone: "+48 795 197 457",
  },
];
export default function TheTeam() {
  return (
    <section className="theteam">
      <aside>
        <Three color="#ffffff" />
      </aside>
      <main>
        <h2>The Team {"{"}</h2>
        <div className="team-container">
          {Team.map((person, index) => {
            return (
              <div className="team-card" key={index}>
                <div className="photo">
                  <img src={person.src} alt={person.name} />
                  <div className="photo-overlay">
                    <h5 className="area">{person.area}</h5>
                    <ul className="overlay-list">
                      {person.responsibleOf.map((items, index) => {
                        return <li key={index}>{items}</li>;
                      })}
                    </ul>
                  </div>
                </div>

                <div className="contact-box">
                  <div className="box-up">
                    <p className="name">{person.name}</p>
                    <p className="function">{person.function}</p>
                  </div>
                  <div className="box-down">
                    <p className="email">{person.email}</p>
                    <p className="phone">{person.phone}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <ThreeByTwo color="#ffffff" />
      </footer>
    </section>
  );
}
