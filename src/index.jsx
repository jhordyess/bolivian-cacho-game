import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from '@/pages/Home'
import './styles.css'
import { GameProvider } from './context/gameContext'

const root = createRoot(document.getElementById('app'))

root.render(
  // <React.StrictMode>
  <GameProvider>
    <Home />
  </GameProvider>
  // </React.StrictMode>
)
