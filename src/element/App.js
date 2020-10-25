import React, { useState } from "react";
import "../index.css";
import StopBtn from "./StopBtn";
import StartBtn from "./StartBtn";

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

const matchNum = (number) => ("0" + number).slice(-2);

const App = () => {
  const [randomArray, setRandomArray] = useState(randomCheck());
  const [hitNum, setHitNum] = useState([]);

  const count = allNumbers.map((number) => {
    const isHit = hitNum.includes(number);
    return (
      <div className={isHit ? "memoryNum" : "stamp-card"} key={number}>
        {matchNum(number)}
      </div>
    );
  });

  const last =
    hitNum.slice(-1)[0] !== undefined && matchNum(hitNum.slice(-1)[0]);

  const [switchBtn, setSwitchBtn] = useState(false);
  const [shuffleStorage, setShuffleStorage] = useState();

  return (
    <div className="container">
      <div className="hit-number">{switchBtn ? shuffleStorage : last}</div>
      <StartBtn
        setSwitchBtn={setSwitchBtn}
        setShuffleStorage={setShuffleStorage}
      />
      <StopBtn
        setRandomArray={setRandomArray}
        hitNum={hitNum}
        setHitNum={setHitNum}
        randomArray={randomArray}
        setSwitchBtn={setSwitchBtn}
      />
      <div className="memorySpace">{count}</div>
    </div>
  );
};

export default App;
