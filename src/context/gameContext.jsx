import React, { createContext, useContext } from 'react'
import { useMachine } from '@xstate/react'
import machine from './machine'

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [state, send] = useMachine(machine)

  return <GameContext.Provider value={{ state, send }}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext)

  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }

  return context
}
