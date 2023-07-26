import { useState } from "react";
import "./index.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  let currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + counter + step);

  currentDate = currentDate.toDateString();

  function countDown() {
    setCounter(counter - step);
  }

  function countUp() {
    setCounter(counter + step);
  }

  return (
    <section>
      <div className="container">
        <div className="steps">
          <input
            type="range"
            id="slider"
            className="range"
            name="slider"
            min="0"
            max="100"
            value={step}
            onChange={(e) => {
              console.log(e.target.value);
              setStep(Number(e.target.value));
            }}
          />
          <span>{step}</span>
        </div>
        <div className="count">
          <button onClick={countDown}>-</button>
          <input
            type="number"
            id="numberInput"
            name="numberInput"
            min="0"
            step="1"
            value={counter}
            onChange={(e) => {
              console.log(e.target.value);
              setCounter(Number(e.target.value));
            }}
          />
          <button onClick={countUp}>+</button>
        </div>
        <div className="date">
          {counter === 0
            ? `Todays is ${currentDate}`
            : counter < 0
            ? `${counter * -1} day before today is ${currentDate}`
            : `${counter} day from today is ${currentDate}`}
        </div>
      </div>
    </section>
  );
}
