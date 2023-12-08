import React from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'
import { useGame } from '@/context/gameContext'

export default function Game() {
  const { state, send } = useGame()

  const handleOpenGame = () => {
    console.info('state', state.value)
    console.info(state.matches('playing'))
    send({ type: 'START_GAME' })
  }

  const handleCloseGame = () => {
    send({ type: 'CANCEL' })
  }

  return (
    <div className="text-center">
      <button
        className="mb-6 inline-block rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
        onClick={handleOpenGame}
      >
        Play now
      </button>
      {state.matches('playing') &&
        createPortal(<Modal onClose={handleCloseGame} />, document.getElementById('modal'))}
    </div>
  )
}
