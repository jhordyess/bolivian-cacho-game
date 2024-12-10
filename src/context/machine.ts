import { handCalculation } from '@/utils/handCalc'
import { assign, setup } from 'xstate'
import { Hand } from '@/enum'

const maxFlips = 2
const maxBlocks = 2

const machine = setup({
  types: {
    context: {} as {
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
    },
    events: {} as
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
          type: 'HAND_CHOICE'
        }
      | {
          type: 'SURRENDER'
        }
      | {
          type: 'HAND_CHOSEN'
          hand: Hand
        }
      | {
          type: 'END_TURN'
        }
      | {
          type: 'RESTART_GAME'
        }
      | {
          type: 'ROLLDICES'
          newDices: { id: number; value: number; inverted: boolean; locked: boolean }[]
        }
      | {
          type: 'ROLLDICE'
          dices: number[]
        }
      | {
          type: 'BLOCK_DICES'
          diceIds: number[]
        }
  }
}).createMachine({
  id: 'stateMachine',
  initial: 'lobby',
  context: {
    board: {
      rollCount: 0,
      flipCount: 0,
      blockCount: 0,
      dices: [
        {
          id: 1,
          value: 0,
          inverted: false,
          locked: false
        },
        {
          id: 2,
          value: 0,
          inverted: false,
          locked: false
        },
        {
          id: 3,
          value: 0,
          inverted: false,
          locked: false
        },
        {
          id: 4,
          value: 0,
          inverted: false,
          locked: false
        },
        {
          id: 5,
          value: 0,
          inverted: false,
          locked: false
        }
      ]
    },
    player: {
      score: 0,
      hand: {
        balas: 0,
        tontos: 0,
        trenes: 0,
        cuadras: 0,
        quinas: 0,
        senas: 0,
        escalera: 0,
        full: 0,
        poker: 0,
        grande: 0
      },
      options: {
        balas: 0,
        tontos: 0,
        trenes: 0,
        cuadras: 0,
        quinas: 0,
        senas: 0,
        escalera: 0,
        full: 0,
        poker: 0,
        grande: 0
      }
    },
    bot: {
      score: 0,
      hand: {
        balas: 0,
        tontos: 0,
        trenes: 0,
        cuadras: 0,
        quinas: 0,
        senas: 0,
        escalera: 0,
        full: 0,
        poker: 0,
        grande: 0
      },
      options: {
        balas: 0,
        tontos: 0,
        trenes: 0,
        cuadras: 0,
        quinas: 0,
        senas: 0,
        escalera: 0,
        full: 0,
        poker: 0,
        grande: 0
      }
    }
  },
  states: {
    lobby: {
      on: {
        START_GAME: 'playing'
      }
    },
    playing: {
      on: {
        IS_PLAYER_TURN: 'player.idle',
        IS_BOT_TURN: 'bot.idle',
        GAME_OVER: 'gameOver',
        CANCEL: 'lobby'
      }
    },
    gameOver: {
      on: {
        RESTART_GAME: 'lobby'
      }
    },
    player: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            ROLL: 'roll', //another name?,
            CANCEL: '#stateMachine.lobby'
          },
          entry: assign({
            board: ({ context: { board } }) => ({
              ...board,
              rollCount: 0,
              flipCount: 0,
              blockCount: 0,
              dices: board.dices.map(dice => ({
                ...dice,
                value: 0,
                locked: false,
                inverted: false
              }))
            }),
            player: ({ context: { player } }) => ({
              ...player,
              score: 0,
              hand: {
                balas: 0,
                tontos: 0,
                trenes: 0,
                cuadras: 0,
                quinas: 0,
                senas: 0,
                escalera: 0,
                full: 0,
                poker: 0,
                grande: 0
              },
              options: {
                balas: 0,
                tontos: 0,
                trenes: 0,
                cuadras: 0,
                quinas: 0,
                senas: 0,
                escalera: 0,
                full: 0,
                poker: 0,
                grande: 0
              }
            })
          })
        },
        roll: {
          on: {
            ROLLDICES: {
              actions: assign({
                board: ({ context: { board }, event }) => ({
                  ...board,
                  dices: event.newDices
                }),
                player: ({ context: { player } }) => ({
                  ...player,
                  options: {
                    balas: 0,
                    tontos: 0,
                    trenes: 0,
                    cuadras: 0,
                    quinas: 0,
                    senas: 0,
                    escalera: 0,
                    full: 0,
                    poker: 0,
                    grande: 0
                  }
                })
              })
            },
            ROLLED: {
              actions: assign({
                board: ({ context: { board } }) => ({
                  ...board,
                  rollCount: board.rollCount + 1,
                  flipCount: 0
                }),
                player: ({ context: { player, board } }) => ({
                  ...player,
                  options: handCalculation(board.dices.map(dice => dice.value))
                })
              })
            },
            BLOCK_DICE: {
              actions: assign({
                board: ({ context: { board }, event }) => ({
                  ...board,
                  ...(board.rollCount === 1 &&
                    board.blockCount < maxBlocks &&
                    board.dices[event.diceId - 1].locked === false && {
                      dices: board.dices.map(dice =>
                        dice.id === event.diceId ? { ...dice, locked: true } : dice
                      ),
                      blockCount: board.blockCount + 1
                    })
                })
              })
            },
            FLIP_DICE: {
              actions: [
                assign({
                  board: ({ context: { board }, event }) => ({
                    ...board,
                    ...(board.dices[event.diceId - 1].inverted
                      ? {
                          flipCount: board.flipCount - 1,
                          dices: board.dices.map(dice =>
                            dice.id === event.diceId ? { ...dice, inverted: false } : dice
                          )
                        }
                      : board.flipCount < maxFlips && {
                          flipCount: board.flipCount + 1,
                          dices: board.dices.map(dice =>
                            dice.id === event.diceId ? { ...dice, inverted: true } : dice
                          )
                        })
                  })
                }),
                assign({
                  player: ({ context: { player, board } }) => ({
                    ...player,
                    options: handCalculation(
                      board.dices.map(dice => (dice.inverted ? 7 - dice.value : dice.value))
                    )
                  })
                })
              ]
            },
            HAND_CHOICE: 'handChoice',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        },
        handChoice: {
          on: {
            HAND_CHOSEN: {
              actions: assign({
                player: ({ context: { player }, event }) => ({
                  ...player,
                  hand: {
                    ...player.hand,
                    [event.hand]: player.options[event.hand]
                  },
                  score: player.score + player.options[event.hand]
                })
              })
            },
            END_TURN: '#stateMachine.playing',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        }
      }
    },
    bot: {
      initial: 'idle',
      states: {
        idle: {
          on: {
            ROLL: 'roll',
            CANCEL: '#stateMachine.lobby'
          },
          entry: assign({
            board: ({ context: { board } }) => ({
              ...board,
              rollCount: 0,
              dices: board.dices.map(dice => ({
                ...dice,
                value: 0,
                locked: false,
                inverted: false
              }))
            })
          })
        },
        roll: {
          on: {
            ROLLDICE: {
              actions: assign({
                board: ({ context: { board }, event }) => ({
                  ...board,
                  dices: board.dices.map(dice =>
                    dice.locked ? dice : { ...dice, value: event.dices[dice.id - 1] }
                  )
                })
              })
            },
            ROLLED: {
              actions: assign({
                board: ({ context: { board } }) => ({
                  ...board,
                  rollCount: board.rollCount + 1
                })
              })
            },
            BLOCK_DICES: {
              actions: assign({
                board: ({ context: { board }, event }) => ({
                  ...board,
                  ...(board.rollCount === 1 && {
                    dices: board.dices.map(dice =>
                      event.diceIds.includes(dice.id) ? { ...dice, locked: true } : dice
                    )
                  })
                })
              })
            },
            HAND_CHOICE: 'handChoice',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          },
          entry: assign({
            board: ({ context: { board } }) => ({
              ...board,
              rollCount: board.rollCount + 1
            })
          })
        },
        handChoice: {
          on: {
            HAND_CHOSEN: {
              actions: assign({
                bot: ({ context: { bot }, event }) => ({
                  ...bot,
                  hand: {
                    ...bot.hand,
                    [event.hand]: bot.options[event.hand]
                  },
                  score: bot.score + bot.options[event.hand]
                })
              })
            },
            END_TURN: '#stateMachine.playing',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        }
      }
    }
  }
})

export default machine
