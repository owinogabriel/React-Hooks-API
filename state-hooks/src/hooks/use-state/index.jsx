import React, { useState } from 'react'

// This component demonstrates the use of the useState hook in React
const UseState = () => {
  // Declare a state variable 'count' with an initial value of 0 and a function 'setCount' to update it
  const [count, setCount] = useState(0)

  // Function to increase the count by 1
  const increaseCount = () => {
    // Update the state with the new count value using the previous state
    setCount((prev) => prev + 1)

    // Log the current value of 'count' (note: this may log the outdated state due to async nature of state updates)
    console.log(count)
  }

  // Function to decrease the count by 1
  const decreaseCount = () => {
    // Update the state with the new count value using the previous state
    setCount((prev) => prev - 1)

    console.log(count)
  }

  // Render the component
  return (
    <div>
      {/* Display the current count */}
      <h1>Count: {count}</h1>
      
      {/* Button to trigger the increaseCount function */}
      <button onClick={increaseCount}>Increase</button>
      
      {/* Button to trigger the decreaseCount function */}
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default UseState
