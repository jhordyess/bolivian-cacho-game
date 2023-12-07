export function invertDiceNumber(dice) {
  switch (dice) {
    case 1:
      return 6
    case 2:
      return 5
    case 3:
      return 4
    case 4:
      return 3
    case 5:
      return 2
    case 6:
      return 1
    default:
      return 0
  }
}

export function randomDice() {
  return Math.floor(Math.random() * 6) + 1
}
