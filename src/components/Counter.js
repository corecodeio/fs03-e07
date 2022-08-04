import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../reducers/counterSlice";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [incrementAmount, setIncrementAmount] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementAmount = () => {
    dispatch(incrementByAmount(Number(incrementAmount)));
  };

  return (
    <>
      <div>Counter</div>
      <p>{count}</p>
      <div>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <input
        type="number"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <button onClick={handleIncrementAmount}>Add Amount</button>

      {/* Crear boton de reset que limpiara el input y seteara el valor del count en su valor inicial */}
    </>
  );
};
export default Counter;
