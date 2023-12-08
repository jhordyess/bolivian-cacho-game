import { useState } from 'react'
import { invertDiceNumber, randomDice } from './utils'
import { useGame } from '@/context/gameContext'

export const useHooks = (maxInvertedDices, defaultDices) => {
  const { state, send } = useGame()
  const [dices, setDices] = useState(defaultDices)
  const [rolling, setRolling] = useState(false)
  const [invertedDices, setInvertedDices] = useState(0)

  const handleAlternative = diceIndex => {
    console.log(state.value)
    if (rolling && dices.filter(({ value }) => value === 0).length != 0) return
    const newDices = [...dices]

    if (maxInvertedDices > invertedDices && !newDices[diceIndex].inverted) {
      //? 🤔🤓
      newDices[diceIndex].inverted = true
      setInvertedDices(invertedDices + 1)
    }
    if (newDices[diceIndex].inverted) {
      newDices[diceIndex].value = invertDiceNumber(newDices[diceIndex].value)
    }
    setDices(newDices)
  }

  let animation
  const roll = () => {
    if (invertedDices === maxInvertedDices) setInvertedDices(0)

    const rollDices = dices.map(dice => ({
      ...dice,
      value: randomDice(),
      inverted: false
    }))
    setDices(rollDices)
    animation = window.requestAnimationFrame(roll)
  }

  const rollingDices = () => {
    setRolling(true)
    animation = window.requestAnimationFrame(roll)
    setTimeout(() => {
      window.cancelAnimationFrame(animation)
      setRolling(false)
      send({ type: 'ROLL' })
    }, 1500)
  }

  return {
    dices,
    rolling,
    handleAlternative,
    rollingDices
  }
}
