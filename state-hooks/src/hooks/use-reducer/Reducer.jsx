import React, { useReducer } from 'react';

// Reducer function to handle state transitions based on the action type.
const reducer = (state, action) => {
  // Switch statement to determine how the state changes based on the action type.
  switch (action.type) {
    case 'increment':
      // Increase the count by 1.
      return { count: state.count + 1 };

    case 'decrement':
      // Decrease the count by 1.
      return { count: state.count - 1 };

    case 'double':
      // Double the current count.
      return { count: state.count * 2 };

    default:
      // Log a message if the action type is not recognized.
      console.log('No action type');
  }
};

// Reducer component using the useReducer hook to manage state.
const Reducer = () => {
  // Initialize the useReducer hook with the reducer function and the initial state.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      {/* Display the current count */}
      <p>Count: {state.count}</p>

      {/* Button to increment the count */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>

      {/* Button to decrement the count */}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>

      {/* Button to double the count */}
      <button onClick={() => dispatch({ type: 'double' })}>*</button>
    </div>
  );
};

export default Reducer;
