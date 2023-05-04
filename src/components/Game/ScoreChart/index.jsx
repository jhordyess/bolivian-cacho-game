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

const ScoreChart = ({}) => (
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

export default ScoreChart;
