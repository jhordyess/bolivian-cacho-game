import React from "react";
import ScoreChart from "./ScoreChart";
import Dices from "./Dices";
import RightPanel from "./RightPanel";

export default function Game({ onClose }) {
  return (
    <div className="container fixed inset-0 flex items-center justify-center bg-white w-full gap-4 px-12">
      <div className="flex flex-row">
        <Board player1="" player2="">
          <ScoreChart name="Player 2" />
          <Dices />
          <ScoreChart name="Player 1" />
        </Board>
        <RightPanel onClose={onClose} />
      </div>
    </div>
  );
}

const Board = ({ children }) => (
  <div className="flex flex-col mx-auto gap-6 border py-6 w-72">{children}</div>
);
