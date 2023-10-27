import React from 'react'
const classNameOnRolling = 'hover:bg-gray-200 bg-gray-200 cursor-not-allowed'

const RightPanel = ({ onClose, roll, rolling }) => {
  return (
    <div className="flex w-40 flex-col justify-between gap-6 border-y border-r py-6">
      <div className="flex w-full flex-col gap-4 px-6">
        <p className="text-justify">
          Aute dolore velit magna ipsum duis anim magna consectetur non. Laboris
        </p>
      </div>
      <div className="flex w-full flex-col gap-4 px-6">
        <button
          className={`rounded-md bg-blue-400 px-6 py-2 font-bold text-white hover:bg-blue-600 ${
            rolling ? classNameOnRolling : ''
          }`}
          title="Roll dices / End turn"
          disabled={rolling}
        >
          START
        </button>
        <button
          className={`rounded-md bg-blue-400 px-6 py-2 font-bold text-white hover:bg-blue-600 ${
            rolling ? classNameOnRolling : ''
          }`}
          title="Roll dices / End turn"
          onClick={roll}
          disabled={rolling}
        >
          ROLL
        </button>
        <button
          className={`rounded-md bg-red-200 px-6 py-2 font-bold text-white hover:bg-red-400 ${
            rolling ? classNameOnRolling : ''
          }`}
          onClick={onClose}
          disabled={rolling}
        >
          Exit
        </button>
      </div>
    </div>
  )
}

export default RightPanel
