import React from "react";

const RightPanel = ({ onClose }) => (
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
      <button
        className="bg-red-200 hover:bg-red-400 text-white font-bold py-2 px-6 rounded-md"
        onClick={onClose}
      >
        Exit
      </button>
    </div>
  </div>
);

export default RightPanel;
