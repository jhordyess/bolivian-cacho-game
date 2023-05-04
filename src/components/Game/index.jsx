import React from "react";
import {
  Escalera,
  Quinas,
  Cuadras,
  Full,
  Grande,
  Balas,
  Poker,
  Senas,
  Trenes,
  Tontos,
} from "./Icons";

const classes = {
  icon: "w-6 absolute top-0 left-0",
  td: "w-14 h-14 px-4 py-3 border-gray-400 relative hover:bg-gray-100 cursor-pointer",
};

const tableData = [
  [
    {
      name: "balas",
      icon: <Balas />,
      tdClassName: "border-r border-b",
      title: "Balas",
    },
    {
      name: "escalera",
      icon: <Escalera />,
      tdClassName: "border-b",
      title: "Escalera / Straight",
    },
    {
      name: "cuadras",
      icon: <Cuadras />,
      tdClassName: "border-l border-b",
      title: "Cuadras",
    },
  ],
  [
    {
      name: "tontos",
      icon: <Tontos />,
      tdClassName: "border-r",
      title: "Tontos",
    },
    {
      name: "full",
      icon: <Full />,
      tdClassName: "",
      title: "Full / Full House",
    },
    {
      name: "quinas",
      icon: <Quinas />,
      tdClassName: "border-l",
      title: "Quinas",
    },
  ],
  [
    {
      name: "trenes",
      icon: <Trenes />,
      tdClassName: "border-r border-t border-b",
      title: "Trenes",
    },
    {
      name: "poker",
      icon: <Poker />,
      tdClassName: "border-t",
      title: "Poker / Four of a kind",
    },
    {
      name: "senas",
      icon: <Senas />,
      tdClassName: "border-l border-t border-b",
      title: "Senas",
    },
  ],
  [
    null,
    {
      name: "grande",
      icon: <Grande />,
      tdClassName: "border-r border-t border-l",
      title: "Grande / Five of a kind",
    },
    null,
  ],
];

export default function Game({ onClose }) {
  return (
    <div className="fixed inset-0 grid grid-cols-3 items-center justify-center bg-white w-full gap-4 px-12">
      <div className="col-span-2 p-4 border">
        <Board />
      </div>
      <div className="col-span-1 flex flex-col gap-8">
        <ScoreChart />
        <Actions onClose={onClose} />
      </div>
    </div>
  );
}

const Actions = ({ onClose }) => (
  <div className="p-4 flex flex-row border gap-4">
    <button>
      <span className="text-2xl">🎲</span>
      <span className="ml-2">Roll dices</span>
    </button>
    <button onClick={onClose}>
      <span className="text-2xl">❌</span>
      <span className="ml-2">Exit</span>
    </button>
  </div>
);

const ScoreChart = () => (
  <div className="p-4 flex flex-col border">
    <h2>Score Chart</h2>
    <div className="flex justify-between">
      <ScoreChartPlayer name="player 1" />
      <ScoreChartPlayer name="player 2" />
    </div>
  </div>
);

const ScoreChartPlayer = ({ name = "" }) => (
  <div className="w-64 mx-auto">
    <h3>{name}</h3>
    <table className="border-collapse mx-auto">
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) =>
              cell ? (
                <td
                  key={`${i}-${j}`}
                  className={cell.tdClassName + " " + classes.td}
                  title={cell.title}
                >
                  {React.cloneElement(cell.icon, {
                    className: classes.icon,
                  })}
                </td>
              ) : (
                <td key={`${i}-${j}`} />
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Board = () => (
  <div className="w-64 mx-auto">
    <Player name="Player 2" />
    <DicesArea />
    <Player name="Player 1" />
  </div>
);

const Player = ({ name = "" }) => (
  <div className="flex flex-col gap-4 justify-between items-center">
    <h3>{name}</h3>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-400 rounded-md mr-2"></div>
      <div className="w-12 h-12 bg-gray-400 rounded-md mr-2"></div>
      <div className="w-12 h-12 bg-gray-400 rounded-md mr-2"></div>
      <div className="w-12 h-12 bg-gray-400 rounded-md mr-2"></div>
      <div className="w-12 h-12 bg-gray-400 rounded-md mr-2"></div>
    </div>
  </div>
);

const DicesArea = () => (
  <div className="flex justify-between items-center h-64"></div>
);
