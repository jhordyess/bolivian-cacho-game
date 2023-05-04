import React from "react";

export default ({ txt = "", className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={className}
  >
    <rect
      x="10"
      y="10"
      width="80"
      height="80"
      rx="20"
      fill="#ffffff"
      stroke="#000000"
      strokeWidth="5"
    />
    <text
      x="50"
      y="50"
      fontSize="50"
      textAnchor="middle"
      alignmentBaseline="middle"
      fontWeight="bold"
    >
      {txt}
    </text>
  </svg>
);
