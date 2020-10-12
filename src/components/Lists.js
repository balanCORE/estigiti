import React from "react";
import { Link } from "react-router-dom";
import "./Lists.scss";

function ULlinks(props) {
  return (
    <ul className={props.class}>
      {props.liArr.map((li, index) => {
        return (
          <li className="nav-item" key={index}>
            <Link
              to={`/${li.pageAnchor}`}
              className="nav-link"
              onClick={props.handleClick}
            >
              {li.pageName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
function List(props) {
  return (
    <ul>
      {props.liArr.map((li, index) => {
        return (
          <li key={index}>
            <span>{li}</span>
          </li>
        );
      })}
    </ul>
  );
}
export { ULlinks, List };
