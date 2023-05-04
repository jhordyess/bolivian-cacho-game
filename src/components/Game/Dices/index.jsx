import React from "react";

const Dices = ({ name }) => {
  const [dices, setDices] = React.useState([1, 2, 3, 4, 5]);

  return (
    <div className="w-full flex flex-row gap-3 border-t border-b p-4">
      <div className="w-10 h-10 bg-gray-400 rounded-md">{dices[0]}</div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">{dices[1]}</div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">{dices[2]}</div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">{dices[3]}</div>
      <div className="w-10 h-10 bg-gray-400 rounded-md">{dices[4]}</div>
    </div>
  );
};

export default Dices;
