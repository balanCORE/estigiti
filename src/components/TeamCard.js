import React from "react";
const size = 360;

export default function TeamCard(props) {
  return (
    <div className="team-card">
      <div className="photo-container">
        <div className="photo-underlay">
          <img src={props.src} alt={props.function} className="photo" />
        </div>

        {size > 500 && (
          <div className="photo-overlay">
            <p>{props.area}</p>
            <ul>
              {props.responsibleOf.map((thing) => {
                return (
                  <li>
                    <span>{thing}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="team-card-description">
        <div className="team-card-section-a">
          <p className="team-card-name">{props.name}</p>
          <p className="team-card-function">{props.function}</p>
        </div>
        <div className="team-card-section-b">
          <p className="team-card-email">{props.email}</p>
          <p className="team-card-tel">{props.phone}</p>
        </div>
      </div>
    </div>
  );
}
