import React, { useRef } from 'react'
import { Quinas, Balas, Cuadras, Senas, Trenes, Tontos } from './icons'
import Stripe from './icons/Stripe'

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

const Dice = ({ number, isLock, isFlip, handleLock, handleFlip }) => {
  const divRef = useRef(null)

  const handleMouseDown = e => {
    const isLeftClick = e.button === 0
    const isRightClick = e.button === 2

    if (isLeftClick && handleLock) handleLock()

    if (isRightClick && handleFlip) handleFlip()
  }

  return (
    <div
      className={`relative h-14 w-14 cursor-pointer rounded-md p-0 hover:opacity-50 ${
        isFlip ? 'bg-blue-200' : 'bg-gray-300'
      }`}
      ref={divRef}
      onContextMenu={e => {
        e.preventDefault()
      }}
      onMouseDown={handleMouseDown}
    >
      {getDice(number)}

      {isLock && <Stripe className="absolute left-0 top-0 h-full w-full rounded-md" />}
    </div>
  )
}

const Dices = ({ children }) => {
  return <div className="flex justify-center gap-3">{children}</div>
}

export { Dices, Dice }
