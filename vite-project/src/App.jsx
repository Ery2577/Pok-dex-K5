import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Poke from './composant/Poke.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Poke/>
    </>
  )
}

export default App
