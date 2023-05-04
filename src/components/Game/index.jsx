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
  td: "w-14 h-14 px-4 py-3 relative hover:bg-gray-100 cursor-pointer",
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
    <div className="container fixed inset-0 flex items-center justify-center bg-white w-full gap-4 px-12">
      <div className="flex flex-row">
        <Board player1="" player2="" />
        <RightPanel />
      </div>
    </div>
  );
}

const Board = ({ player1, player2 }) => (
  <div className="flex flex-col mx-auto gap-6 border py-6 w-72">
    <Player name="Player 2" />
    <Dices />
    <Player name="Player 1" />
  </div>
);

const Player = ({ name = "" }) => (
  <div className="flex flex-row gap-6 justify-between items-center">
    <ScoreChart name={name} />
  </div>
);

const Dices = ({ name }) => (
  <div className="w-full flex flex-row gap-3 border-t border-b p-4">
    <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
    <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
    <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
    <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
    <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
  </div>
);

const RightPanel = ({ name = "" }) => (
  <div className="border-r border-y flex flex-col justify-between gap-6 py-6 w-40">
    <div className="flex flex-col gap-4 px-6 w-full">
      <p className="text-justify">
        Aute dolore velit magna ipsum duis anim magna consectetur non. Laboris
      </p>
    </div>
    <div className="flex flex-col gap-4 px-6 w-full">
      <button
        class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
        title="Roll dices / End turn"
      >
        START
      </button>
      <button
        class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md"
        title="Roll dices / End turn"
      >
        ROLL
      </button>
      <button className="bg-red-200 hover:bg-red-400 text-white font-bold py-2 px-6 rounded-md">
        Exit
      </button>
    </div>
  </div>
);

const ScoreChart = ({ name = "" }) => (
  <div className="w-full">
    <table className="border-collapse mx-auto border">
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
