import "./index.css";
import { useState } from "react";

export default function App() {
  const [step, setState] = useState(1);
  const [count, setCount] = useState(0);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  function increaseStep() {
    setState(() => step + 1);
  }
  function decreaseStep() {
    if (step > 1) {
      setState(() => step - 1);
    }
  }
  function increaseCount() {
    setCount(() => count + step);
  }
  function decreaseCount() {
    setCount(() => count - step);
  }

  return (
    <section>
      <div className="container">
        <div className="steps">
          <button onClick={decreaseStep}>-</button>
          <h1>Steps : {step} </h1>
          <button onClick={increaseStep}>+</button>
        </div>
        <div className="count">
          <button onClick={decreaseCount}>-</button>
          <h1>Count : {count}</h1>
          <button onClick={increaseCount}>+</button>
        </div>
        <div className="date">
          <p>
            {count === 0
              ? `Today is ${currentDate.toDateString()}`
              : count < 0
              ? `${count * -1} days ago was ${currentDate.toDateString()}`
              : count > 0
              ? `${count} days from today is ${currentDate.toDateString()}`
              : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
