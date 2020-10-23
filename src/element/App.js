import React, { useState } from "react";
import "../index.css";
import Btn from "./Btn";

const randomCheck = () => {
  let numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
  ];
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
