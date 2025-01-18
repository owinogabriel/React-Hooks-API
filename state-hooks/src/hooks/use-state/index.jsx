import  React from "react"
import { useState } from "react";

const UseState = () => {
const [count, setCount] = useState(0)

const increase = () => {
  setCount((prev) => prev+1)
  console.log(count)
}

  return(
   <div>
    <h1>Count:{count}</h1>
    <button onClick={increase}>Increase</button>
   </div>

  )
}

export default UseState;