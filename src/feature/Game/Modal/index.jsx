import React from 'react'
import ScoreChart from './components/ScoreChart'
import { Dices, Dice } from './components/Dices'
import { useHooks } from './hooks'

const defaultDices = [
  {
    id: 1,
    value: 0,
    inverted: false
  },
  {
    id: 2,
    value: 0,
    inverted: false
  },
  {
    id: 3,
    value: 0,
    inverted: false
  },
  {
    id: 4,
    value: 0,
    inverted: false
  },
  {
    id: 5,
    value: 0,
    inverted: false
  }
]

const maxInvertedDices = 2

export default function Modal({ onClose }) {
  const { dices, rolling, rollingDices, handleAlternative } = useHooks(
    maxInvertedDices,
    defaultDices
  )

  return (
    <div className="max-h-screen min-w-full">
      <div className="fixed inset-0 flex items-center justify-center gap-4 overflow-y-auto bg-[#C19A6B] px-12">
        <div className="mx-auto flex h-[550px] w-[870px] flex-col gap-6 border bg-white py-6">
          <div className="flex gap-12">
            <ScoreChart name="Player 1" />
            <ScoreChart name="Player 2" />
          </div>

          <div className="flex h-full items-center justify-center border-t p-8">
            <button
              className={`mx-auto h-20 w-20 rounded-full bg-red-200 font-bold text-white hover:bg-red-400 ${
                rolling ? 'cursor-not-allowed bg-gray-200 hover:bg-gray-200' : ''
              }`}
              onClick={onClose}
              disabled={rolling}
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
                rolling ? 'cursor-not-allowed bg-gray-200 hover:bg-gray-200' : ''
              }`}
              title="Roll dices / End turn"
              onClick={rollingDices}
              disabled={rolling}
            >
              ROLL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
