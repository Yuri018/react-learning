import { useState } from "react";
import "./styles.css";
import Button from "../Button";

function Counter() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prevValue) => prevValue + 1);
  };

  const subtract = () => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <div className="counter">
      <div className="buttonControl">
        <Button onClick={subtract} name="-" />
      </div>

      <div className="value">{count}</div>

      <div className="buttonControl">
        <Button onClick={add} name="+" />
      </div>
    </div>
  );
}

export default Counter;
