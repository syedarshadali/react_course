import React, { useState } from 'react'

const Counter = () => {

  // const[count, setCount] = useState(0);
  let count = 0;

  function setCount(){
    count = count + 1;
  }

  return (
    <div>
      <p>You clicked {count} times</p>

      {/* Set the new state when button is clicked */}
      <button onClick={() => setCount(count + 1)}> + </button>
      <b> - </b>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  )
}

export default Counter
