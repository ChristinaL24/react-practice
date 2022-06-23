import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(4); // first element is always current state & second element is function that allows you to update state

  function decrementCount () {
    setCount(prevCount => prevCount - 1)
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
   <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={increaseCount}>+</button>
   </>
  );
}

export default App;
