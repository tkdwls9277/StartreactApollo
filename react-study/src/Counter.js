import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber - 1);
  };

  const decrease = () => {
    setNumber(number + 1);
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default Counter;
