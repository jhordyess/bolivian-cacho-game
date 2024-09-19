import { assign, createMachine } from 'xstate'

const machine = createMachine(
  {
    id: 'stateMachine',
    initial: 'lobby',
    context: {
      board: {
        rollCount: 0,
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
        hand: [
          {
            name: 'balas',
            value: 0
          },
          {
            name: 'escalera',
            value: 0
          },
          {
            name: 'cuadras',
            value: 0
          },
          {
            name: 'tontos',
            value: 0
          },
          {
            name: 'full',
            value: 0
          },
          {
            name: 'quinas',
            value: 0
          },
          {
            name: 'trenes',
            value: 0
          },
          {
            name: 'poker',
            value: 0
          },
          {
            name: 'senas',
            value: 0
          },
          {
            name: 'grande',
            value: 0
          }
        ]
      },
      bot: {
        score: 0,
        hand: [
          {
            name: 'balas',
            value: 0
          },
          {
            name: 'escalera',
            value: 0
          },
          {
            name: 'cuadras',
            value: 0
          },
          {
            name: 'tontos',
            value: 0
          },
          {
            name: 'full',
            value: 0
          },
          {
            name: 'quinas',
            value: 0
          },
          {
            name: 'trenes',
            value: 0
          },
          {
            name: 'poker',
            value: 0
          },
          {
            name: 'senas',
            value: 0
          },
          {
            name: 'grande',
            value: 0
          }
        ]
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
              board: ({ board }) => ({
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
              ROLLED: {
                actions: assign({
                  //Required, auto when entering to the state? :thinking:
                  board: ({ board }, event) => ({
                    ...board,
                    dices: board.dices.map(dice =>
                      dice.locked ? dice : { ...dice, value: event.dices[dice.id - 1] }
                    )
                  })
                })
              },
              ROLL: {
                target: 'roll',
                cond: 'canRollAgain'
              },
              BLOCK_DICES: {
                actions: assign({
                  board: ({ board }, event) => ({
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
              board: ({ board }) => ({
                ...board,
                rollCount: board.rollCount + 1
              })
            })
          },
          handChoice: {
            on: {
              HAND_CHOSEN: {
                actions: assign({
                  player: ({ player }, event) => ({
                    hand: player.hand.map(hand =>
                      hand.name === event.hand.name ? { ...hand, value: event.value } : hand
                    ),
                    score: player.score + event.value
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
              board: ({ board }) => ({
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
              ROLLED: {
                actions: assign({
                  board: ({ board }, event) => ({
                    ...board,
                    dices: board.dices.map(dice =>
                      dice.locked ? dice : { ...dice, value: event.dices[dice.id - 1] }
                    )
                  })
                })
              },
              ROLL: {
                target: 'roll',
                cond: 'canRollAgain'
              },
              BLOCK_DICES: {
                actions: assign({
                  board: ({ board }, event) => ({
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
              board: ({ board }) => ({
                ...board,
                rollCount: board.rollCount + 1
              })
            })
          },
          handChoice: {
            on: {
              HAND_CHOSEN: {
                actions: assign({
                  bot: ({ bot }, event) => ({
                    hand: bot.hand.map(hand =>
                      hand.name === event.hand.name ? { ...hand, value: event.value } : hand
                    ),
                    score: bot.score + event.value
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
  },
  {
    guards: {
      canRollAgain: ({ board }) => board.rollCount < 2
    }
  }
)

export default machine
