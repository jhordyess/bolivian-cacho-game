import { useState } from 'react'
import { randomDice } from './helpers/randomDice'
import { useGame } from '@/context/gameContext'

const maxRolls = 2

export const useHooks = () => {
  const { state, send } = useGame()

  const dices = state.context.board.dices
  const rollCount = state.context.board.rollCount
  const playerHand = state.context.player.hand
  const playerOptions = state.context.player.options

  const [isRolling, setRolling] = useState(false)

  const handleFlip = (diceId: number) => {
    if (!state.matches({ player: 'choosing' }) || isRolling) return
    send({ type: 'FLIP_DICE', diceId })
  }

  const handleLock = (diceId: number) => {
    if (!state.matches({ player: 'choosing' }) || isRolling) return
    send({ type: 'BLOCK_DICE', diceId })
  }

  //Update dices while rolling
  let animation: number

  const executeDiceRoll = () => {
    const newDices = dices.map(dice => ({
      ...dice,
      value: dice.locked ? dice.value : randomDice(),
      inverted: false
    }))

    send({ type: 'NEW_DICES', newDices })
    animation = window.requestAnimationFrame(executeDiceRoll)
  }

  const rollDices = () => {
    if (state.matches({ player: 'idle' }) || state.matches({ player: 'choosing' }))
      send({ type: 'ROLL' })

    if (rollCount < maxRolls) {
      setRolling(true)
      animation = window.requestAnimationFrame(executeDiceRoll)

      setTimeout(() => {
        window.cancelAnimationFrame(animation)
        setRolling(false)
        send({ type: 'ROLLED' })
      }, 1500)
    } else {
      alert('You have reached the maximum number of rolls')
    }
  }

  return {
    dices,
    isRolling,
    rollDices,
    handleLock,
    handleFlip,
    playerHand,
    playerOptions
  }
}
