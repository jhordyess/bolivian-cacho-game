import { countDice } from './countDice'
import { DiceFaces } from '@/constants/enum'

describe('countDice', () => {
  it('should return count 0 and score 0 when no dice match the face', () => {
    const dicesValues = [2, 3, 4, 5, 6]
    const diceFace = DiceFaces.balas
    const result = countDice(dicesValues, diceFace)
    expect(result.count).toBe(0)
    expect(result.score).toBe(0)
  })

  it('should return correct count and score when some dice match the face', () => {
    const dicesValues = [1, 2, 1, 4, 5]
    const diceFace = DiceFaces.balas
    const result = countDice(dicesValues, diceFace)
    expect(result.count).toBe(2)
    expect(result.score).toBe(2)
  })

  it('should return correct count and score when all dice match the face', () => {
    const dicesValues = [3, 3, 3, 3, 3]
    const diceFace = DiceFaces.trenes
    const result = countDice(dicesValues, diceFace)
    expect(result.count).toBe(5)
    expect(result.score).toBe(15)
  })

  it('should return correct count and score for a single matching dice', () => {
    const dicesValues = [6, 2, 3, 4, 5]
    const diceFace = DiceFaces.senas
    const result = countDice(dicesValues, diceFace)
    expect(result.count).toBe(1)
    expect(result.score).toBe(6)
  })
})
