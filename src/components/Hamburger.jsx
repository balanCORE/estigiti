import React from "react";
function MenuOpen(props) {
  return (
    <div className="menu-icon" onClick={props.handleClick}>
      <svg
        viewBox="0 0 30 12"
        preserveAspectRatio="none"
        height="30"
        width="30"
      >
        <path stroke="white" d="M0 3 L30 3"></path>
        <path stroke="white" d="M0 7 L30 7"></path>
        <path stroke="white" d="M8 11 L30 11"></path>
      </svg>
    </div>
  );
}

function MenuClose(props) {
  return (
    <div className="menu-icon" onClick={props.handleClick}>
      <svg
        viewBox="0 0 30 12"
        preserveAspectRatio="none"
        height="30"
        width="30"
      >
        <path stroke="white" d="M0 0 L30 12"></path>
        <path stroke="white" d="M0 12 L30 0"></path>
      </svg>
    </div>
  );
}

export { MenuOpen, MenuClose };
