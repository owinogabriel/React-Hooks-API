import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './hooks/use-state'
import Pedro from './hooks/use-effect/effect'
import Reducer from './hooks/use-reducer/Reducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseState />
    <Reducer />
     <Pedro />
    </>
  )
}

export default App
