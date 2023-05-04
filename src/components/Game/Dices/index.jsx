import React from "react";
import {
  Quinas,
  Balas,
  Cuadras,
  Senas,
  Trenes,
  Tontos,
} from "@components/Icons";

function getDice(dice) {
  switch (dice) {
    case 1:
      return <Balas />;
    case 2:
      return <Tontos />;
    case 3:
      return <Trenes />;
    case 4:
      return <Cuadras />;
    case 5:
      return <Quinas />;
    case 6:
      return <Senas />;
    default:
      return null;
  }
}

const Dices = ({ dices }) => {
  return (
    <div className="w-full flex flex-row gap-3 border-t border-b p-4">
      <div className="w-10 h-10 bg-gray-400 rounded-md">
        {getDice(dices[0])}
      </div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">
        {getDice(dices[1])}
      </div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">
        {getDice(dices[2])}
      </div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">
        {getDice(dices[3])}
      </div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">
        {getDice(dices[4])}
      </div>
    </div>
  );
};

export default Dices;
