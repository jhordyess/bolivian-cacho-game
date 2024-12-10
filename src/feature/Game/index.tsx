import { createPortal } from 'react-dom'
import Modal from './Modal'
import { useGame } from '@/context/gameContext'

export default function Game() {
  const { state, send } = useGame()

  const handleOpenGame = () => {
    send({ type: 'START_GAME' })
  }

  const isLobby = state.matches('lobby')

  return (
    <div className="text-center">
      <button
        className="mb-6 inline-block rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
        onClick={handleOpenGame}
      >
        Play now
      </button>
      {!isLobby && createPortal(<Modal />, document.getElementById('modal'))}
    </div>
  )
}
