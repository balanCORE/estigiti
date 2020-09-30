import React from "react";
import { Link } from "react-router-dom";
import "./ULlinks.css";

export default function ULlinks(props) {
  return (
    <ul className={`menu-list ${props.class}`}>
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
