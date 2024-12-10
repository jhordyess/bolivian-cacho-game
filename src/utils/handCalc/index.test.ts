import { handCalculation } from './index'
import { Hand } from '@/enum'

describe('handCalculation', () => {
  it('should calculate correct scores for balas', () => {
    const dicesValues = [1, 2, 1, 4, 5]
    const result = handCalculation(dicesValues)
    expect(result[Hand.balas]).toBe(2)
  })

  it('should calculate correct scores for tontos', () => {
    const dicesValues = [2, 2, 2, 4, 5]
    const result = handCalculation(dicesValues)
    expect(result[Hand.tontos]).toBe(6)
  })

  it('should calculate correct scores for trenes', () => {
    const dicesValues = [3, 3, 3, 4, 5]
    const result = handCalculation(dicesValues)
    expect(result[Hand.trenes]).toBe(9)
  })

  it('should calculate correct scores for cuadras', () => {
    const dicesValues = [4, 4, 4, 4, 5]
    const result = handCalculation(dicesValues)
    expect(result[Hand.cuadras]).toBe(16)
  })

  it('should calculate correct scores for quinas', () => {
    const dicesValues = [5, 5, 5, 5, 5]
    const result = handCalculation(dicesValues)
    expect(result[Hand.quinas]).toBe(25)
  })

  it('should calculate correct scores for senas', () => {
    const dicesValues = [6, 6, 6, 6, 6]
    const result = handCalculation(dicesValues)
    expect(result[Hand.senas]).toBe(30)
  })

  it('should calculate correct scores for escalera', () => {
    const dicesValues = [1, 2, 3, 4, 5]
    const result = handCalculation(dicesValues)
    expect(result[Hand.escalera]).toBe(20)
  })

  it('should calculate correct scores for full', () => {
    const dicesValues = [3, 3, 3, 2, 2]
    const result = handCalculation(dicesValues)
    expect(result[Hand.full]).toBe(30)
  })

  it('should calculate correct scores for poker', () => {
    const dicesValues = [4, 4, 4, 4, 2]
    const result = handCalculation(dicesValues)
    expect(result[Hand.poker]).toBe(40)
  })

  it('should calculate correct scores for grande', () => {
    const dicesValues = [5, 5, 5, 5, 5]
    const result = handCalculation(dicesValues)
    expect(result[Hand.grande]).toBe(50)
  })

  it('should calculate correct scores for escalera on first roll', () => {
    const dicesValues = [1, 2, 3, 4, 5]
    const result = handCalculation(dicesValues, true)
    expect(result[Hand.escalera]).toBe(25)
  })

  it('should calculate correct scores for full on first roll', () => {
    const dicesValues = [3, 3, 3, 2, 2]
    const result = handCalculation(dicesValues, true)
    expect(result[Hand.full]).toBe(35)
  })

  it('should calculate correct scores for poker on first roll', () => {
    const dicesValues = [4, 4, 4, 4, 2]
    const result = handCalculation(dicesValues, true)
    expect(result[Hand.poker]).toBe(45)
  })

  it('should calculate correct scores for grande on first roll', () => {
    const dicesValues = [5, 5, 5, 5, 5]
    const result = handCalculation(dicesValues, true)
    expect(result[Hand.grande]).toBe(Infinity)
  })
})
