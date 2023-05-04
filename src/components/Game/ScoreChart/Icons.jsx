import React from "react";

const Text = ({ txt = "", className }) => (
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

export const Balas = ({ className }) => (
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

export const Tontos = ({ className }) => (
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
    <circle cx="30" cy="70" r="9" fill="#000000" />
    <circle cx="70" cy="30" r="9" fill="#000000" />
  </svg>
);

export const Trenes = ({ className }) => (
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
    <circle cx="30" cy="70" r="9" fill="#000000" />
    <circle cx="50" cy="50" r="9" fill="#000000" />
    <circle cx="70" cy="30" r="9" fill="#000000" />
  </svg>
);

export const Cuadras = ({ className }) => (
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
    <circle cx="30" cy="30" r="9" fill="#000000" />
    <circle cx="70" cy="30" r="9" fill="#000000" />
    <circle cx="30" cy="70" r="9" fill="#000000" />
    <circle cx="70" cy="70" r="9" fill="#000000" />
  </svg>
);

export const Quinas = ({ className }) => (
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
    <circle cx="30" cy="30" r="9" fill="#000000" />
    <circle cx="70" cy="30" r="9" fill="#000000" />
    <circle cx="50" cy="50" r="9" fill="#000000" />
    <circle cx="30" cy="70" r="9" fill="#000000" />
    <circle cx="70" cy="70" r="9" fill="#000000" />
  </svg>
);

export const Senas = ({ className }) => (
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
    <circle cx="30" cy="30" r="9" fill="#000000" />
    <circle cx="70" cy="30" r="9" fill="#000000" />
    <circle cx="30" cy="50" r="9" fill="#000000" />
    <circle cx="70" cy="50" r="9" fill="#000000" />
    <circle cx="30" cy="70" r="9" fill="#000000" />
    <circle cx="70" cy="70" r="9" fill="#000000" />
  </svg>
);

export const Escalera = ({ className }) => (
  <Text className={className} txt="E" />
);

export const Full = ({ className }) => <Text className={className} txt="F" />;

export const Poker = ({ className }) => <Text className={className} txt="P" />;

export const Grande = ({ className }) => <Text className={className} txt="G" />;
