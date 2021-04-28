import React, { useReducer } from "react";

type Action = { type: "increase" } | { type: "decrease" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      throw new Error("unhandled action");
  }
}

function Counter() {
  const [count, disfatch] = useReducer(reducer, 0);
  const onIncrease = () => disfatch({ type: "increase" });
  const onDecrease = () => disfatch({ type: "decrease" });
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
