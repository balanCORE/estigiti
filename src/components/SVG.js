import React from "react";

function Two(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 4"
      height="4rem"
      width="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="1" x2="100" y2="1" stroke={props.color} />
      <line x1="0" y1="3" x2="100" y2="3" stroke={props.color} />
    </svg>
  );
}
// function NLinesSVG(props) {
//   let coordinates = props.coordinates;
//   if (!coordinates) {
//     coordinates = [0, 0.5, 100, 0.5];
//   }
//   return (
//     <svg
//       className={props.class}
//       viewBox="0 0 100 4" //`0 0 100 ${ n * 2 }`
//       height="4rem" // n * 2rem
//       width="100%"
//       preserveAspectRatio="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {[].map((line, index) => {
//         return (
//           <line
//             x1={`${line.key}`}
//             y1="0.5"
//             x2="100"
//             y2="0.5"
//             stroke={props.color}
//             className={`${props.class}-${index}`}
//           />
//         );
//       })}
//     </svg>
//   );
// }

function TwoByOne(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 6"
      height="6rem"
      width="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="0.5" x2="100" y2="0.5" stroke={props.color} />
      <line x1="0" y1="2.75" x2="100" y2="2.75" stroke={props.color} />
      <line x1="25" y1="5" x2="100" y2="5" stroke={props.color} />
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
      className={props.class}
      viewBox="0 0 100 6"
      height="6rem"
      width="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="0.5" x2="100" y2="0.5" stroke={props.color} />
      <line x1="0" y1="2.75" x2="100" y2="2.75" stroke={props.color} />
      <line x1="0" y1="5" x2="100" y2="5" stroke={props.color} />
    </svg>
  );
}

function ThreeByTwo(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 10"
      height="10rem"
      width="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="0.5" x2="100" y2="0.5" stroke={props.color} />
      <line x1="0" y1="2.75" x2="100" y2="2.75" stroke={props.color} />
      <line x1="0" y1="5" x2="100" y2="5" stroke={props.color} />
      <line x1="25" y1="7.25" x2="100" y2="7.25" stroke={props.color} />
      <line x1="25" y1="9.75" x2="100" y2="9.75" stroke={props.color} />
    </svg>
  );
}
function ThreeByThree(props) {
  return (
    <svg
      className={props.class}
      viewBox="0 0 100 12"
      height="12rem"
      width="100%"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="0.5" x2="100" y2="0.5" stroke={props.color} />
      <line x1="0" y1="2.75" x2="100" y2="2.75" stroke={props.color} />
      <line x1="0" y1="5" x2="100" y2="5" stroke={props.color} />
      <line x1="25" y1="7.25" x2="100" y2="7.25" stroke={props.color} />
      <line x1="25" y1="9.75" x2="100" y2="9.75" stroke={props.color} />
      <line x1="25" y1="12" x2="100" y2="12" stroke={props.color} />
    </svg>
  );
}
export { Two, TwoByOne, TwoByTwo, Three, ThreeByTwo, ThreeByThree };
