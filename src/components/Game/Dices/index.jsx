import React from 'react'
import { Quinas, Balas, Cuadras, Senas, Trenes, Tontos } from '@components/Icons'

function getDice(dice) {
  switch (dice) {
    case 1:
      return <Balas />
    case 2:
      return <Tontos />
    case 3:
      return <Trenes />
    case 4:
      return <Cuadras />
    case 5:
      return <Quinas />
    case 6:
      return <Senas />
    default:
      return null
  }
}

const Dice = ({ number, handleAlternative, invertible }) => {
  return (
    <div
      className={`h-10 w-10 cursor-pointer  rounded-md p-0 ${
        invertible ? 'bg-blue-200' : 'bg-gray-300'
      }`}
      onClick={handleAlternative}
    >
      {getDice(number)}
    </div>
  )
}

const Dices = ({ children }) => {
  return <div className="flex w-full flex-row gap-3 border-b border-t p-4">{children}</div>
}

export { Dices, Dice }
