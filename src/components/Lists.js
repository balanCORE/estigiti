import React from "react";
import { Link } from "react-router-dom";
import "./Lists.scss";

function ULlinks(props) {
  return (
    <ul className={props.class}>
      {props.liArr.map((li) => {
        return (
          <li className="nav-item" key={li}>
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
function List({ liArr }) {
  return (
    <ul>
      {liArr.map((li) => {
        return (
          <li key={li}>
            <span>{li}</span>
          </li>
        );
      })}
    </ul>
  );
}
export { ULlinks, List };
