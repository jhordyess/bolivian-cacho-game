import { createMachine } from 'xstate'

const machine = createMachine({
  id: 'stateMachine',
  initial: 'lobby',
  states: {
    lobby: {
      on: {
        START_GAME: 'playing'
      }
    },
    playing: {
      on: {
        IS_PLAYER_TURN: 'player.turn',
        IS_BOT_TURN: 'bot.turn',
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
      initial: 'turn',
      states: {
        turn: {
          on: {
            ROLL: 'roll',
            CANCEL: '#stateMachine.lobby'
          }
        },
        roll: {
          on: {
            DICES_CHOICE: 'dicesChoice',
            HAND_CHOICE: 'handChoice',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        },
        dicesChoice: {
          on: {
            HAND_CHOICE: 'handChoice',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        },
        handChoice: {
          on: {
            END_TURN: '#stateMachine.playing',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        }
      }
    },
    bot: {
      initial: 'turn',
      states: {
        turn: {
          on: {
            ROLL: 'roll',
            CANCEL: '#stateMachine.lobby'
          }
        },
        roll: {
          on: {
            DICES_CHOICE: 'dicesChoice',
            HAND_CHOICE: 'handChoice',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        },
        dicesChoice: {
          on: {
            HAND_CHOICE: 'handChoice',
            SURRENDER: '#stateMachine.playing',
            CANCEL: '#stateMachine.lobby'
          }
        },
        handChoice: {
          on: {
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
