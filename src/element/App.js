import React, { useState, useMemo } from "react";
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

  const last =
    hitNum.slice(-1)[0] !== undefined && matchNum(hitNum.slice(-1)[0]);

  const count = allNumbers.map((number) => {
    const isHit = hitNum.includes(number);
    return (
      <div className={isHit ? "memoryNum" : "stamp-card"} key={number}>
        {matchNum(number)}
      </div>
    );
  });

  const [isShuffle, setIsShuffle] = useState(false);
  const [shuffleStorage, setShuffleStorage] = useState();

  const musicStart = useMemo(() => new Audio("pon-roll.m4a"), []);
  const musicStop = useMemo(() => new Audio("drum-roll-finish1.mp3"), []);

  return (
    <div>
      <div className="header">
        <img className="logo" src="logo-white.png" alt="description of image" />
        <img
          className="tittle"
          src="tittle-white.png"
          alt="description of tittle image"
        />
      </div>
      <div className="main-wrapper">
        <div className="container">
          <div className="hit-number">{isShuffle ? shuffleStorage : last}</div>
          <div className="button-wrapper">
            {isShuffle ? (
              <StopBtn
                setRandomArray={setRandomArray}
                hitNum={hitNum}
                setHitNum={setHitNum}
                randomArray={randomArray}
                setIsShuffle={setIsShuffle}
                musicStart={musicStart}
                musicStop={musicStop}
              />
            ) : (
              <StartBtn
                matchNum={matchNum}
                setIsShuffle={setIsShuffle}
                setShuffleStorage={setShuffleStorage}
                musicStart={musicStart}
                musicStop={musicStop}
              />
            )}
          </div>
        </div>
        <div className="memorySpace">{count}</div>
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default App;
