import { type DiceSet, Hand, DiceFaces } from '@/enum'

const straightPatterns = [
  [1, 2, 3, 4, 5], //IBIDEM
  [2, 3, 4, 5, 6], //IBIDEM
  [1, 3, 4, 5, 6] //ORIGINAL: 3, 4, 5, 6, 1
  // [1, 2, 4, 5, 6], //ORIGINAL: 4, 5, 6, 1, 2
  // [1, 2, 3, 5, 6], //ORIGINAL: 5, 6, 1, 2, 3
  // [1, 2, 3, 4, 6] //ORIGINAL: 6, 1, 2, 3, 4
]

const countDicesOriginal = (dicesValues: number[]): Record<number, number> =>
  dicesValues.reduce(
    (acc, dice) => {
      acc[dice] = acc[dice] ? acc[dice] + 1 : 1
      return acc
    },
    {} as Record<number, number>
  )

const countDice = (
  dicesValues: DiceSet,
  dice: DiceFaces
): {
  count: number
  score: number
} => {
  const count = dicesValues.filter(d => d === dice).length
  return {
    count,
    score: count * dice
  }
}

export const evaluateHandDices = (dicesValues: DiceSet) => {
  const scores = new Map<DiceFaces, number>()
  const counts = new Map<DiceFaces, number>()

  Object.values(DiceFaces).forEach(dice => {
    if (typeof dice === 'string') return
    const { count, score } = countDice(dicesValues, dice)
    counts.set(dice, count)
    scores.set(dice, score)
  })

  return { scores, counts }
}

const isStraight = (dicesValues: number[]): boolean => {
  const sortedDices = dicesValues.slice().sort((a, b) => a - b)
  return straightPatterns.some(pattern =>
    pattern.every((value, index) => value === sortedDices[index])
  )
}

const isFull = (dicesCount: Record<number, number>): boolean =>
  Object.values(dicesCount).includes(3) && Object.values(dicesCount).includes(2)

const isPoker = (dicesCount: Record<number, number>): boolean =>
  Object.values(dicesCount).includes(4)

const isGrande = (dicesCount: Record<number, number>): boolean =>
  Object.values(dicesCount).includes(5)

const calcDicesScores = (dicesCount: Record<number, number>): Record<number, number> =>
  Object.entries(dicesCount).reduce(
    (acc, [dice, count]) => {
      const puntuation = count * Number(dice)
      return {
        ...acc,
        [dice]: puntuation
      }
    },
    {} as Record<number, number>
  )

type HandCalculation = (dicesValues: number[], isFirstRoll?: boolean) => Record<Hand, number>

export const handCalculation: HandCalculation = (dicesValues, isFirstRoll = false) => {
  const dicesCount = countDicesOriginal(dicesValues)

  const escalera = isStraight(dicesValues) ? (isFirstRoll ? 25 : 20) : 0

  const full = isFull(dicesCount) ? (isFirstRoll ? 35 : 30) : 0

  const poker = isPoker(dicesCount) ? (isFirstRoll ? 45 : 40) : 0

  const grande = isGrande(dicesCount) ? (isFirstRoll ? Infinity : 50) : 0

  const dicesCounts = calcDicesScores(dicesValues)

  return {
    balas: dicesCounts[1] || 0,
    tontos: dicesCounts[2] || 0,
    trenes: dicesCounts[3] || 0,
    cuadras: dicesCounts[4] || 0,
    quinas: dicesCounts[5] || 0,
    senas: dicesCounts[6] || 0,
    escalera,
    full,
    poker,
    grande
  }
}
