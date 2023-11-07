import React from 'react'
import { createPortal } from 'react-dom'
import GameContainer from './Container'
import { useMachine } from '@/machine/stateMachine'

export default function Game() {
  const [state, send] = useMachine()

  const handleOpenGame = () => {
    send('START_GAME')
  }

  const handleCloseGame = () => {
    send('CANCEL')
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
        createPortal(<GameContainer onClose={handleCloseGame} />, document.getElementById('modal'))}
    </div>
  )
}