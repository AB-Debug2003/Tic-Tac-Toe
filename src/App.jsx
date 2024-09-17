import './App.css'
import Tictac from './Tictac'
import { SpeedInsights } from '@vercel/speed-insights/react';
function App() {

  return (
    <>
      <Tictac/>
      <SpeedInsights />
    </>
  )
}

export default App
