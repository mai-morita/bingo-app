import React, { useState } from "react";

const allNum = [11, 21, 35, 49, 56, 62, 75];
const StartBtn = ({ setSwitchBtn, setShuffleStorage }) => {
  const [intervalId, setIntervalId] = useState(null);
  const handleClickStartBtn = () => {
    const view = () => {
      const arrayIndex = Math.floor(Math.random() * allNum.length);
      setShuffleStorage(allNum[arrayIndex]);
    };
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIntervalId(setInterval(view, 50));
    setSwitchBtn(true);
  };
  return (
    <button className="PushButton" onClick={handleClickStartBtn}>
      START!!
    </button>
  );
};

export default StartBtn;
