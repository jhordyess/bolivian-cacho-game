import { Hand } from '@/constants/enum'

export type MachineContext = {
  board: {
    rollCount: number
    flipCount: number
    blockCount: number
    dices: { id: number; value: number; inverted: boolean; locked: boolean }[]
  }
  player: {
    score: number
    hand: Record<Hand, number>
    options: Record<Hand, number>
  }
  bot: {
    score: number
    hand: Record<Hand, number>
    options: Record<Hand, number>
  }
}

export type MachineEvents =
  | {
      type: 'START_GAME'
    }
  | {
      type: 'IS_PLAYER_TURN'
    }
  | {
      type: 'IS_BOT_TURN'
    }
  | {
      type: 'GAME_OVER'
    }
  | {
      type: 'CANCEL'
    }
  | {
      type: 'ROLL'
    }
  | {
      type: 'ROLLED'
      newDices: { id: number; value: number; inverted: boolean; locked: boolean }[]
    }
  | {
      type: 'SURRENDER'
    }
  | {
      type: 'BLOCK_DICE'
      diceId: number
    }
  | {
      type: 'FLIP_DICE'
      diceId: number
    }
  | {
      type: 'END_TURN'
      hand: Hand
    }
  | {
      type: 'RESTART_GAME'
    }
