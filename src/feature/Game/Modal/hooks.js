import { useState } from 'react'
import { invertDiceNumber, randomDice } from './utils'
import { useGame } from '@/context/gameContext'

export const useHooks = maxInvertedDices => {
  const { state, send } = useGame()

  const dices = state.context.board.dices
  const rollCount = state.context.board.rollCount

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

  //Roll dice and start the rol
  let animation
  const roll = () => {
    if (invertedDices === maxInvertedDices) setInvertedDices(0)

    const rollDices = dices.map(dice => ({
      ...dice,
      value: randomDice(),
      inverted: false
    }))
    send({ type: 'ROLLDICE', dices: rollDices.map(({ value }) => value) })
    animation = window.requestAnimationFrame(roll)
  }

  const rollDices = () => {
    if (rollCount < 2) {
      setRolling(true)
      animation = window.requestAnimationFrame(roll)
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
    handleAlternative,
    rollDices
  }
}
