import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/rootReducer";
import { AppDispatch } from "../app/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

const CounterExample: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <h2>Counter Example</h2>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <strong>{count}</strong>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </div>
    </div>
  );
};

export default CounterExample;
