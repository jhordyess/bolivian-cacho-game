import React, { useEffect } from 'react'
import ScoreChart from './components/ScoreChart'
import { Dices, Dice } from './components/Dices'
import { useHooks } from './hooks'
import { useGame } from '@/context/gameContext'

const maxInvertedDices = 2

export default function Modal() {
  const { state, send } = useGame()

  const isPlayerIdle = state.matches('player.idle')

  const handleCloseGame = () => {
    send({ type: 'CANCEL' })
  }

  useEffect(() => {
    // Sets the player turn automatically
    if (state.matches('playing')) {
      send({ type: 'IS_PLAYER_TURN' })
    }
  }, [state, send])

  const { dices, isRolling, rollDices, handleAlternative } = useHooks(maxInvertedDices)

  return (
    <div className="max-h-screen min-w-full">
      <div className="fixed inset-0 flex items-center justify-center gap-4 overflow-y-auto bg-[#C19A6B] px-12">
        <div className="mx-auto flex h-[550px] w-[870px] flex-col gap-6 border bg-white py-6">
          <div className="flex gap-12">
            <ScoreChart name="Player 1" active={isPlayerIdle} />
            <ScoreChart name="Player 2" />
          </div>

          <div className="flex h-full items-center justify-center border-t p-8">
            <button
              className={`mx-auto h-20 w-20 rounded-full bg-red-200 font-bold text-white hover:bg-red-400 ${
                isRolling ? 'cursor-not-allowed bg-gray-200 hover:bg-gray-200' : ''
              }`}
              onClick={handleCloseGame}
              disabled={isRolling}
            >
              Exit
            </button>

            <Dices>
              {dices.map(({ id, value, inverted }, index) => (
                <Dice
                  key={id + '-' + index}
                  number={value}
                  handleAlternative={() => {
                    handleAlternative(index)
                  }}
                  invertible={inverted}
                />
              ))}
            </Dices>

            <button
              className={`mx-auto h-20 w-20 rounded-full bg-blue-400 font-bold text-white hover:bg-blue-600 ${
                isRolling ? 'cursor-not-allowed bg-gray-200 hover:bg-gray-200' : ''
              }`}
              title="Roll dices / End turn"
              onClick={rollDices}
              disabled={isRolling}
            >
              ROLL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
