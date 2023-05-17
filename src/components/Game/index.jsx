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
  const [rolling, setRolling] = React.useState(false);

  let animation;
  const roll = () => {
    setDices(rollDices());
    animation = window.requestAnimationFrame(roll);
  };

  const rollingDices = () => {
    setRolling(true);
    animation = window.requestAnimationFrame(roll);
    setTimeout(() => {
      window.cancelAnimationFrame(animation);
      setRolling(false);
    }, 1500);
  };

  return (
    <div className="max-h-screen min-w-full overflow-y-auto">
      <div className="fixed inset-0 flex items-center justify-center bg-white gap-4 px-12">
        <div className="flex flex-row">
          <Board player1="" player2="bot">
            <ScoreChart name="Player 2" />
            <Dices dices={dices} />
            <ScoreChart name="Player 1" />
          </Board>
          <RightPanel onClose={onClose} roll={rollingDices} rolling={rolling} />
        </div>
      </div>
    </div>
  );
}

const Board = ({ children }) => (
  <div className="flex flex-col mx-auto gap-6 border py-6 w-72">{children}</div>
);
