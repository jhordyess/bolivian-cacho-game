import { useState } from 'react'
import { invertDiceNumber, randomDice } from './utils'
import { useGame } from '@/context/gameContext'

export const useHooks = maxInvertedDices => {
  const { state, send } = useGame()

  const dices = state.context.board.dices

  const [isRolling, setRolling] = useState(false)
  const [invertedDices, setInvertedDices] = useState(0)

  const handleAlternative = diceIndex => {
    if (isRolling && dices.filter(({ value }) => value === 0).length != 0) return
    const newDices = [...dices]

    if (maxInvertedDices > invertedDices && !newDices[diceIndex].inverted) {
      //? 🤔🤓
      newDices[diceIndex].inverted = true
      setInvertedDices(invertedDices + 1)
    }
    if (newDices[diceIndex].inverted) {
      newDices[diceIndex].value = invertDiceNumber(newDices[diceIndex].value)
    }
    //TODO store inverted dices in context
    // setDices(newDices)
  }

  let animation
  const roll = () => {
    if (invertedDices === maxInvertedDices) setInvertedDices(0)

    const rollDices = dices.map(dice => ({
      ...dice,
      value: randomDice(),
      inverted: false
    }))
    send({ type: 'ROLLED', dices: rollDices.map(({ value }) => value) })
    animation = window.requestAnimationFrame(roll)
  }

  const rollDices = () => {
    setRolling(true)
    send({ type: 'ROLL' })
    animation = window.requestAnimationFrame(roll)
    setTimeout(() => {
      window.cancelAnimationFrame(animation)
      setRolling(false)
      // send({ type: 'ROLL' })
    }, 1500)
  }

  return {
    dices,
    isRolling,
    handleAlternative,
    rollDices
  }
}
