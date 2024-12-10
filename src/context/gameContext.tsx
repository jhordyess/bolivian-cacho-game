import { createContext, type ReactNode, useContext } from 'react'
import { useMachine } from '@xstate/react'
import machine from './machine'
import type { EventFromLogic, SnapshotFrom } from 'xstate'

type Context = {
  state: SnapshotFrom<typeof machine>
  send: (event: EventFromLogic<typeof machine>) => void
}

const GameContext = createContext<Context | null>(null)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, send] = useMachine(machine)

  return <GameContext.Provider value={{ state, send }}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }

  return context
}
