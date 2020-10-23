import React, { useState } from "react";
import "../index.css";
import Btn from "./Btn";

const randomCheck = () => {
  let numbers = [...Array(75).keys()].map((i) => ++i);
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

  const listItems = hitNum.map((number) => <li key={number}>{number}</li>);
  return (
    <div className="container">
      <Btn
        setRandomArray={setRandomArray}
        hitNum={hitNum}
        setHitNum={setHitNum}
        randomArray={randomArray}
      />
      <ul>{listItems}</ul>
    </div>
  );
};

export default App;
