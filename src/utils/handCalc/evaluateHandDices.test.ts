import { evaluateHandDices } from './evaluateHandDices'
import { DiceSet, DiceFaces } from '@/enum'

describe('evaluate Hand Dices', () => {
  it('should evaluate a hand with 2 balas, 1 tonto, 1 tren and 1 cuadra', () => {
    const dicesValues: DiceSet = [1, 1, 2, 3, 4]

    const { counts, scores } = evaluateHandDices(dicesValues)

    expect(counts.get(DiceFaces.balas)).toBe(2)
    expect(counts.get(DiceFaces.tontos)).toBe(1)
    expect(counts.get(DiceFaces.trenes)).toBe(1)
    expect(counts.get(DiceFaces.cuadras)).toBe(1)
    expect(counts.get(DiceFaces.quinas)).toBe(0)
    expect(counts.get(DiceFaces.senas)).toBe(0)

    expect(scores.get(DiceFaces.balas)).toBe(2)
    expect(scores.get(DiceFaces.tontos)).toBe(2)
    expect(scores.get(DiceFaces.trenes)).toBe(3)
    expect(scores.get(DiceFaces.cuadras)).toBe(4)
    expect(scores.get(DiceFaces.quinas)).toBe(0)
    expect(scores.get(DiceFaces.senas)).toBe(0)
  })

  it('should evaluate a hand with 1 quina, 1 sena, 1 cuadra, 1 tonto and 1 bala', () => {
    const dicesValues: DiceSet = [5, 6, 4, 2, 1]
    const { counts, scores } = evaluateHandDices(dicesValues)
    expect(counts.get(DiceFaces.balas)).toBe(1)
    expect(counts.get(DiceFaces.tontos)).toBe(1)
    expect(counts.get(DiceFaces.trenes)).toBe(0)
    expect(counts.get(DiceFaces.cuadras)).toBe(1)
    expect(counts.get(DiceFaces.quinas)).toBe(1)
    expect(counts.get(DiceFaces.senas)).toBe(1)

    expect(scores.get(DiceFaces.balas)).toBe(1)
    expect(scores.get(DiceFaces.tontos)).toBe(2)
    expect(scores.get(DiceFaces.trenes)).toBe(0)
    expect(scores.get(DiceFaces.cuadras)).toBe(4)
    expect(scores.get(DiceFaces.quinas)).toBe(5)
    expect(scores.get(DiceFaces.senas)).toBe(6)
  })

  it('should evaluate a hand with 4 senas and 1 tonto', () => {
    const dicesValues: DiceSet = [6, 6, 6, 6, 2]
    const { counts, scores } = evaluateHandDices(dicesValues)

    expect(counts.get(DiceFaces.balas)).toBe(0)
    expect(counts.get(DiceFaces.tontos)).toBe(1)
    expect(counts.get(DiceFaces.trenes)).toBe(0)
    expect(counts.get(DiceFaces.cuadras)).toBe(0)
    expect(counts.get(DiceFaces.quinas)).toBe(0)
    expect(counts.get(DiceFaces.senas)).toBe(4)

    expect(scores.get(DiceFaces.balas)).toBe(0)
    expect(scores.get(DiceFaces.tontos)).toBe(2)
    expect(scores.get(DiceFaces.trenes)).toBe(0)
    expect(scores.get(DiceFaces.cuadras)).toBe(0)
    expect(scores.get(DiceFaces.quinas)).toBe(0)
    expect(scores.get(DiceFaces.senas)).toBe(24)
  })
})
