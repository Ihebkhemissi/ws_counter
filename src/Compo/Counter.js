import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/Actions/Counter";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default Counter;
