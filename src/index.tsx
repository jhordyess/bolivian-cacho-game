import { createRoot } from 'react-dom/client'
import Home from '@/pages/Home'
import './styles.css'
import { GameProvider } from './context/gameContext'

createRoot(document.getElementById('app') as HTMLElement).render(
  // <React.StrictMode>
  <GameProvider>
    <Home />
  </GameProvider>
  // </React.StrictMode>
)
