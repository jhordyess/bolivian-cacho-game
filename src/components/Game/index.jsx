import React from "react";
import ScoreChart from "./ScoreChart";
import { Dices, Dice } from "./Dices";
import RightPanel from "./RightPanel";

function invertDiceNumber(dice) {
  switch (dice) {
    case 1:
      return 6;
    case 2:
      return 5;
    case 3:
      return 4;
    case 4:
      return 3;
    case 5:
      return 2;
    case 6:
      return 1;
    default:
      return 0;
  }
}

function randomDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const defaultDices = [
  {
    id: 1,
    value: 0,
    inverted: false,
  },
  {
    id: 2,
    value: 0,
    inverted: false,
  },
  {
    id: 3,
    value: 0,
    inverted: false,
  },
  {
    id: 4,
    value: 0,
    inverted: false,
  },
  {
    id: 5,
    value: 0,
    inverted: false,
  },
];

const maxInvertedDices = 2;

export default function Game({ onClose }) {
  const [dices, setDices] = React.useState(defaultDices);
  const [rolling, setRolling] = React.useState(false);
  const [invertedDices, setInvertedDices] = React.useState(0);

  const handleAlternative = (diceIndex) => {
    if (rolling && dices.filter(({ value }) => value === 0).length != 0) return;
    const newDices = [...dices];

    if (maxInvertedDices > invertedDices && !newDices[diceIndex].inverted) {
      //? 🤔🤓
      newDices[diceIndex].inverted = true;
      setInvertedDices(invertedDices + 1);
    }
    if (newDices[diceIndex].inverted) {
      newDices[diceIndex].value = invertDiceNumber(newDices[diceIndex].value);
    }
    setDices(newDices);
  };

  const formatDices = dices.map(({ value }) => value);

  let animation;
  const roll = () => {
    if (invertedDices === maxInvertedDices) setInvertedDices(0);

    const rollDices = dices.map((dice) => ({
      ...dice,
      value: randomDice(),
      inverted: false,
    }));
    setDices(rollDices);
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
            <Dices>
              {dices.map(({ id, value, inverted }, index) => (
                <Dice
                  key={id + "-" + index}
                  number={value}
                  handleAlternative={() => {
                    handleAlternative(index);
                  }}
                  invertible={inverted}
                />
              ))}
            </Dices>
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
