import React, { useState } from "react";
import "../index.css";
import Btn from "./Btn";

const MAX_NUMBER = 75;

const allNumbers = [...Array(MAX_NUMBER).keys()].map((i) => ++i);

const randomCheck = () => {
  let numbers = [...Array(MAX_NUMBER).keys()].map((i) => ++i);
  let numLen = numbers.length;
  while (numLen) {
    let randomNumber = Math.floor(Math.random() * numLen);
    let t = numbers[--numLen];
    numbers[numLen] = numbers[randomNumber];
    numbers[randomNumber] = t;
  }
  return numbers;
};

const App = () => {
  const [randomArray, setRandomArray] = useState(randomCheck());
  const [hitNum, setHitNum] = useState([]);

  const listItems = hitNum.map((number) => <div key={number}>{number}</div>);
  const count = allNumbers.map((number) => <div key={number}>{number}</div>);
  const last = hitNum.slice(-1)[0];
  return (
    <div className="container">
      <div className="hit-number">{last}</div>
      <Btn
        setRandomArray={setRandomArray}
        hitNum={hitNum}
        setHitNum={setHitNum}
        randomArray={randomArray}
      />
      <div>{listItems}</div>
      <div className="stamp-card">{count}</div>
    </div>
  );
};

export default App;
