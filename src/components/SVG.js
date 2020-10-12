import React from "react";

function Two(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 4"
      height="2.8rem"
      width="100%"
      preserveAspectRatio="none"
    >
      <line
        id="line-1"
        x1="0"
        y1="0.5"
        x2="100"
        y2="0.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        id="line-2"
        x1="0"
        y1="3.5"
        x2="100"
        y2="3.5"
        stroke={props.color}
        strokeWidth="1"
      />
    </svg>
  );
}
function TwoByOne(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 7"
      height="4.9rem"
      width="100%"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="0.5"
        x2="100"
        y2="0.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="3.5"
        x2="100"
        y2="3.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="25"
        y1="6.5"
        x2="100"
        y2="6.5"
        stroke={props.color}
        strokeWidth="1"
      />
    </svg>
  );
}

function TwoByTwo(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 10"
      height="7rem"
      width="100%"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="0.5"
        x2="100"
        y2="0.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="3.375"
        x2="100"
        y2="3.375"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        className="line"
        x1="22"
        y1="6.375"
        x2="100"
        y2="6.375"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        className="line"
        x1="22"
        y1="9.5"
        x2="100"
        y2="9.5"
        stroke={props.color}
        strokeWidth="1"
      />
    </svg>
  );
}

function Three(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 7"
      height="4.9rem"
      width="100%"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="0.5"
        x2="100"
        y2="0.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="3.5"
        x2="100"
        y2="3.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="6.5"
        x2="100"
        y2="6.5"
        stroke={props.color}
        strokeWidth="1"
      />
    </svg>
  );
}

function ThreeByTwo(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 13"
      height="9.1rem"
      width="100%"
      preserveAspectRatio="none"
    >
      <line
        x1="0"
        y1="0.5"
        x2="100"
        y2="0.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="3.5"
        x2="100"
        y2="3.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="0"
        y1="6.5"
        x2="100"
        y2="6.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="25"
        y1="9.5"
        x2="100"
        y2="9.5"
        stroke={props.color}
        strokeWidth="1"
      />
      <line
        x1="25"
        y1="12.5"
        x2="100"
        y2="12.5"
        stroke={props.color}
        strokeWidth="1"
      />
    </svg>
  );
}

export { Two, TwoByOne, TwoByTwo, Three, ThreeByTwo };
