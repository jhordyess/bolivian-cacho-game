import React from "react";
import ScoreChart from "./ScoreChart";
import Dices from "./Dices";
import RightPanel from "./RightPanel";

function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDices() {
  return [randomDice(), randomDice(), randomDice(), randomDice(), randomDice()];
}

export default function Game({ onClose }) {
  const [dices, setDices] = React.useState([0, 0, 0, 0, 0]);

  const roll = () => {
    setDices(rollDices());
  };

  return (
    <div className="container fixed inset-0 flex items-center justify-center bg-white w-full gap-4 px-12">
      <div className="flex flex-row">
        <Board player1="" player2="">
          <ScoreChart name="Player 2" />
          <Dices dices={dices} />
          <ScoreChart name="Player 1" />
        </Board>
        <RightPanel onClose={onClose} roll={roll} />
      </div>
    </div>
  );
}

const Board = ({ children }) => (
  <div className="flex flex-col mx-auto gap-6 border py-6 w-72">{children}</div>
);
