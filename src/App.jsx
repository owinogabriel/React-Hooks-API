import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './hooks/use-state'
import Effect from './hooks/use-effect'
import Pedro from './hooks/use-effect/effect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UseState />
     {/* <Effect /> */}
     <Pedro />
    </>
  )
}

export default App
