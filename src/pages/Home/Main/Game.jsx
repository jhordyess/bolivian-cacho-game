import React from "react";
import { createPortal } from "react-dom";
import GameMain from "@components/Game/index.jsx";

export default function Game() {
  const [openGame, setOpenGame] = React.useState(true);

  const handleOpenGame = () => {
    setOpenGame(true);
  };

  const handleCloseGame = () => {
    setOpenGame(false);
  };

  return (
    <div className="text-center">
      <button
        className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mb-6"
        onClick={handleOpenGame}
      >
        Play now
      </button>
      {openGame &&
        createPortal(
          <GameMain onClose={handleCloseGame} />,
          document.getElementById("modal")
        )}
    </div>
  );
}
