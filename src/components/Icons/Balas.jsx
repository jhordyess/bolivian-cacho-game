import React from "react";

export default ({ className }) => (
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
    <circle cx="50" cy="50" r="9" fill="#000000" />
  </svg>
);
