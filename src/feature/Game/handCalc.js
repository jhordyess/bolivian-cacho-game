const straightPatterns = [
  {
    id: 1,
    pattern: [1, 2, 3, 4, 5] //IBIDEM
  },
  {
    id: 2,
    pattern: [2, 3, 4, 5, 6] //IBIDEM
  },
  {
    id: 3,
    pattern: [1, 3, 4, 5, 6] //ORIGINAL: 3, 4, 5, 6, 1
  },
  {
    id: 4,
    pattern: [1, 2, 4, 5, 6] //ORIGINAL: 4, 5, 6, 1, 2
  },
  {
    id: 5,
    pattern: [1, 2, 3, 5, 6] //ORIGINAL: 5, 6, 1, 2, 3
  },
  {
    id: 6,
    pattern: [1, 2, 3, 4, 6] //ORIGINAL: 6, 1, 2, 3, 4
  }
]

const checkIfStraight = dices => {
  const sortedDices = dices.slice().sort((a, b) => a - b)

  return (
    straightPatterns.find(({ pattern }) =>
      pattern.every((value, index) => value === sortedDices[index])
    ) || null
  )
}

const dicesPuntuation = dices => {
  const dicesCount = dices.reduce((acc, dice) => {
    acc[dice] = acc[dice] ? acc[dice] + 1 : 1
    return acc
  }, {})

  return Object.entries(dicesCount).reduce((acc, [dice, count]) => {
    const puntuation = count * dice
    return {
      ...acc,
      [dice]: puntuation
    }
  }, {})
}

const handCalculation = dicesValue => {
  const dicesCounts = dicesPuntuation(dicesValue)
  const isStraight = checkIfStraight(dicesValue)

  return {
    balas: dicesCounts[1] || 0,
    tontos: dicesCounts[2] || 0,
    trenes: dicesCounts[3] || 0,
    cuadras: dicesCounts[4] || 0,
    quinas: dicesCounts[5] || 0,
    senas: dicesCounts[6] || 0,
    straight: isStraight ? 20 : 0
  }
}

const sample = [3, 1, 1, 6, 5]

console.log('sample', sample)
console.log(handCalculation(sample)) // 20
