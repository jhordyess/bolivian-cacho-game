import { Hand, HandDices } from '@/enum'

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

export const countDices = (dicesValues: number[]): Record<HandDices, number> => ({
  [Hand.balas]: dicesValues.filter(dice => dice === 1).length,
  [Hand.tontos]: dicesValues.filter(dice => dice === 2).length,
  [Hand.trenes]: dicesValues.filter(dice => dice === 3).length,
  [Hand.cuadras]: dicesValues.filter(dice => dice === 4).length,
  [Hand.quinas]: dicesValues.filter(dice => dice === 5).length,
  [Hand.senas]: dicesValues.filter(dice => dice === 6).length
})

const sortDices = (dicesValues: number[]): number[] => dicesValues.slice().sort((a, b) => a - b)

const isStraight = (sortedDices: number[]): boolean =>
  straightPatterns.some(pattern => pattern.every((value, index) => value === sortedDices[index]))

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

  const sortedDices = sortDices(dicesValues)

  const escalera = isStraight(sortedDices) ? (isFirstRoll ? 25 : 20) : 0

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
