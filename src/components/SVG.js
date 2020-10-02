import React from "react";

function Two(props) {
  return (
    <svg
      className={`${props.class} two`}
      viewBox="0 0 64 5"
      preserveAspectRatio="none"
      height="4rem"
      width="100%"
    >
      <path stroke={props.color} d="M0 1 L100 1"></path>
      <path stroke={props.color} d="M0 4 L100 4"></path>
    </svg>
  );
}

function TwoByOne(props) {
  return (
    <svg
      className={`${props.class} two-by-one`}
      viewBox="0 0 64 8"
      preserveAspectRatio="none"
      height="6rem"
      width="100%"
    >
      <path stroke={props.color} d="M0 1 L100 1"></path>
      <path stroke={props.color} d="M0 4 L100 4"></path>
      <path stroke={props.color} d="M15 7 L100 7"></path>
    </svg>
  );
}

function TwoByTwo(props) {
  return (
    <svg
      className={`${props.class} two-by-two`}
      viewBox="0 0 64 11"
      preserveAspectRatio="none"
      height="8rem"
      width="100%"
    >
      <path stroke={props.color} d="M0 1 L100 1"></path>
      <path stroke={props.color} d="M0 4 L100 4"></path>
      <path stroke={props.color} d="M6 7 L100 7"></path>
      <path stroke={props.color} d="M6 10 L100 10"></path>
    </svg>
  );
}

function Three(props) {
  return (
    <svg
      className={`${props.class} three`}
      viewBox="0 0 64 8"
      preserveAspectRatio="none"
      height="6rem"
      width="100%"
    >
      <path stroke={props.color} d="M0 1 L100 1"></path>
      <path stroke={props.color} d="M0 4 L100 4"></path>
      <path stroke={props.color} d="M0 7 L100 7"></path>
    </svg>
  );
}

function ThreeByTwo(props) {
  return (
    <svg
      className={`${props.class} three-by-two`}
      viewBox="0 0 64 14"
      preserveAspectRatio="none"
      height="10rem"
      width="100%"
    >
      <path stroke={props.color} d="M0 1 L100 1"></path>
      <path stroke={props.color} d="M0 4 L100 4"></path>
      <path stroke={props.color} d="M0 7 L100 7"></path>
      <path stroke={props.color} d="M15 10 L100 10"></path>
      <path stroke={props.color} d="M15 13 L100 13"></path>
    </svg>
  );
}
function ThreeByThree(props) {
  return (
    <svg
      className={`${props.class} three-by-three`}
      viewBox="0 0 64 17"
      preserveAspectRatio="none"
      height="12rem"
      width="100%"
    >
      <path stroke={props.color} d="M0 1 L100 1"></path>
      <path stroke={props.color} d="M0 4 L100 4"></path>
      <path stroke={props.color} d="M0 7 L100 7"></path>
      <path stroke={props.color} d="M6 10 L100 10"></path>
      <path stroke={props.color} d="M6 13 L100 13"></path>
      <path stroke={props.color} d="M6 16 L100 16"></path>
    </svg>
  );
}
export { Two, TwoByOne, TwoByTwo, Three, ThreeByTwo, ThreeByThree };
