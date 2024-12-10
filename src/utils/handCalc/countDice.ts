import { DiceFaces, type DiceSet } from '@/enum'

type CountDice = (
  dicesValues: DiceSet,
  diceFace: DiceFaces
) => {
  count: number
  score: number
}

export const countDice: CountDice = (dicesValues, diceFace) => {
  const count = dicesValues.filter(d => d === diceFace).length
  return {
    count,
    score: count * diceFace
  }
}
