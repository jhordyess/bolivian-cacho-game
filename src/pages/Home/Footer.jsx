import React from "react";

export default function Footer({ children }) {
  return (
    <footer className="text-center">
      <p className="text-gray-400">{children}</p>
    </footer>
  );
}
