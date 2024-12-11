import { DiceFaces } from '@/enum'
import { countDice } from './countDice'

type EvaluateHandDices = (dicesValues: number[]) => {
  scores: Map<DiceFaces, number>
  counts: Map<DiceFaces, number>
}

export const evaluateHandDices: EvaluateHandDices = dicesValues => {
  const counts = new Map()
  const scores = new Map()

  Object.values(DiceFaces).forEach(diceFace => {
    if (typeof diceFace === 'string') return
    const { count, score } = countDice(dicesValues, diceFace)
    counts.set(diceFace, count)
    scores.set(diceFace, score)
  })

  return { scores, counts }
}
