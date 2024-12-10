const straightPatterns = [
  [1, 2, 3, 4, 5], //IBIDEM
  [2, 3, 4, 5, 6], //IBIDEM
  [1, 3, 4, 5, 6] //ORIGINAL: 3, 4, 5, 6, 1
  // [1, 2, 4, 5, 6], //ORIGINAL: 4, 5, 6, 1, 2
  // [1, 2, 3, 5, 6], //ORIGINAL: 5, 6, 1, 2, 3
  // [1, 2, 3, 4, 6] //ORIGINAL: 6, 1, 2, 3, 4
]

type HandCalculation = (
  dicesValues: number[],
  isFirstRoll?: boolean
) => {
  balas: number
  tontos: number
  trenes: number
  cuadras: number
  quinas: number
  senas: number
  escalera: number
  full: number
  poker: number
  grande: number
}

export const handCalculation: HandCalculation = (dicesValues, isFirstRoll = false) => {
  const dicesCount: Record<number, number> = dicesValues.reduce(
    (acc, dice) => {
      acc[dice] = acc[dice] ? acc[dice] + 1 : 1
      return acc
    },
    {} as Record<number, number>
  )

  const sortedDices = dicesValues.slice().sort((a, b) => a - b)

  const isStraight = straightPatterns.some(pattern =>
    pattern.every((value, index) => value === sortedDices[index])
  )

  const isFull = Object.values(dicesCount).includes(3) && Object.values(dicesCount).includes(2)

  const isPoker = Object.values(dicesCount).includes(4)

  const isGrande = Object.values(dicesCount).includes(5)

  const dicesCounts = Object.entries(dicesCount).reduce(
    (acc, [dice, count]) => {
      const puntuation = count * Number(dice)
      return {
        ...acc,
        [dice]: puntuation
      }
    },
    {} as Record<number, number>
  )

  return {
    balas: dicesCounts[1] || 0,
    tontos: dicesCounts[2] || 0,
    trenes: dicesCounts[3] || 0,
    cuadras: dicesCounts[4] || 0,
    quinas: dicesCounts[5] || 0,
    senas: dicesCounts[6] || 0,
    escalera: isStraight ? (isFirstRoll ? 25 : 20) : 0,
    full: isFull ? (isFirstRoll ? 35 : 30) : 0,
    poker: isPoker ? (isFirstRoll ? 45 : 40) : 0,
    grande: isGrande ? (isFirstRoll ? Infinity : 50) : 0
  }
}
