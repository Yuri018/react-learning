import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

function Counter({ count, onPlus, onMinus }) {
  // const [count, setCount] = useState(0);
  // const onPlus = () => {
  //   setCount((prevValue) => prevValue + 1);
  // };

  // const onMinus = () => {
  //   setCount((prevValue) => prevValue - 1);
  // };

  return (
    <div className="counter">
      <div className="buttonControl">
        <Button onClick={onMinus} name="-" />
      </div>

      <div className="value">{count}</div>

      <div className="buttonControl">
        <Button onClick={onPlus} name="+" />
      </div>
    </div>
  );
}

export default Counter;
