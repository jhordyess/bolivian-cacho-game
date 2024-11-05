const straightPatterns = [
  [1, 2, 3, 4, 5], //IBIDEM
  [2, 3, 4, 5, 6], //IBIDEM
  [1, 3, 4, 5, 6] //ORIGINAL: 3, 4, 5, 6, 1
  // [1, 2, 4, 5, 6], //ORIGINAL: 4, 5, 6, 1, 2
  // [1, 2, 3, 5, 6], //ORIGINAL: 5, 6, 1, 2, 3
  // [1, 2, 3, 4, 6] //ORIGINAL: 6, 1, 2, 3, 4
]

export const handCalculation = dicesValue => {
  const dicesCount = dicesValue.reduce((acc, dice) => {
    acc[dice] = acc[dice] ? acc[dice] + 1 : 1
    return acc
  }, {})

  const sortedDices = dicesValue.slice().sort((a, b) => a - b)

  const isStraight = straightPatterns.some(pattern =>
    pattern.every((value, index) => value === sortedDices[index])
  )

  const isFull = Object.values(dicesCount).includes(3) && Object.values(dicesCount).includes(2)

  const isPoker = Object.values(dicesCount).includes(4)

  const isGrande = Object.values(dicesCount).includes(5)

  const dicesCounts = Object.entries(dicesCount).reduce((acc, [dice, count]) => {
    const puntuation = count * dice
    return {
      ...acc,
      [dice]: puntuation
    }
  }, {})

  return {
    balas: dicesCounts[1] || 0,
    tontos: dicesCounts[2] || 0,
    trenes: dicesCounts[3] || 0,
    cuadras: dicesCounts[4] || 0,
    quinas: dicesCounts[5] || 0,
    senas: dicesCounts[6] || 0,
    escalera: isStraight ? 20 : 0,
    full: isFull ? 30 : 0,
    poker: isPoker ? 40 : 0,
    grande: isGrande ? 50 : 0
  }
}
