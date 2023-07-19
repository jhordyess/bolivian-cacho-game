import React from 'react'
import { createPortal } from 'react-dom'
import GameMain from '@components/Game/index.jsx'

export default function Game() {
  const [openGame, setOpenGame] = React.useState(false)

  const handleOpenGame = () => {
    setOpenGame(true)
  }

  const handleCloseGame = () => {
    setOpenGame(false)
  }

  return (
    <div className="text-center">
      <button
        className="mb-6 inline-block rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
        onClick={handleOpenGame}
      >
        Play now
      </button>
      {openGame &&
        createPortal(<GameMain onClose={handleCloseGame} />, document.getElementById('modal'))}
    </div>
  )
}
