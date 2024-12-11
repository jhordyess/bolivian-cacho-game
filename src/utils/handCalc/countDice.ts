import { DiceFaces } from '@/enum'

type CountDice = (
  dicesValues: number[],
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
