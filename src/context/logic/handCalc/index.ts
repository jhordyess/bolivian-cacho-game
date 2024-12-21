import { Hand, DiceFaces } from '@/constants/enum'
import { straightPatterns } from './patterns'
import { evaluateHandDices } from './evaluateHandDices'

const isStraight = (dicesValues: number[]): boolean => {
  const sortedDices = dicesValues.slice().sort((a, b) => a - b)

  return straightPatterns.some(pattern =>
    pattern.every((value, index) => value === sortedDices[index])
  )
}

const isFull = (countsValues: number[]) => countsValues.includes(3) && countsValues.includes(2)

const isPoker = (countsValues: number[]) => countsValues.includes(4)

const isGrande = (countsValues: number[]) => countsValues.includes(5)

type HandCalculation = (dicesValues: number[], isFirstRoll?: boolean) => Record<Hand, number>

export const handCalculation: HandCalculation = (dicesValues, isFirstRoll = false) => {
  if (dicesValues.length !== 5) throw new Error('Invalid number of dices')
  if (dicesValues.some(d => d < 1 || d > 6)) throw new Error('Invalid dice value')

  const { counts, scores } = evaluateHandDices(dicesValues)
  const countsValues = Array.from(counts.values())

  return {
    [Hand.balas]: scores.get(DiceFaces.balas) || 0,
    [Hand.tontos]: scores.get(DiceFaces.tontos) || 0,
    [Hand.trenes]: scores.get(DiceFaces.trenes) || 0,
    [Hand.cuadras]: scores.get(DiceFaces.cuadras) || 0,
    [Hand.quinas]: scores.get(DiceFaces.quinas) || 0,
    [Hand.senas]: scores.get(DiceFaces.senas) || 0,
    [Hand.escalera]: isStraight(dicesValues) ? (isFirstRoll ? 25 : 20) : 0,
    [Hand.full]: isFull(countsValues) ? (isFirstRoll ? 35 : 30) : 0,
    [Hand.poker]: isPoker(countsValues) ? (isFirstRoll ? 45 : 40) : 0,
    [Hand.grande]: isGrande(countsValues) ? (isFirstRoll ? Infinity : 50) : 0
  }
}
