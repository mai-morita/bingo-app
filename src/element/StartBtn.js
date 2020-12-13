import React, { useState } from "react";

const allNum = [3, 4, 5, 16, 27, 38, 49, 50, 61, 72];

const StartBtn = ({
  matchNum,
  setIsShuffle,
  setShuffleStorage,
  musicStart,
  musicStop,
}) => {
  const [intervalId, setIntervalId] = useState(null);
  const handleClickStartBtn = () => {
    musicStart.loop = true;
    musicStart.play(); // 再生

    musicStop.pause(); //　停止
    musicStop.currentTime = 0;

    const view = () => {
      const arrayIndex = Math.floor(Math.random() * allNum.length);
      setShuffleStorage(matchNum(allNum[arrayIndex]));
    };
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIntervalId(setInterval(view, 50));
    setIsShuffle(true);
  };
  return (
    <button className="PushButton" onClick={handleClickStartBtn}>
      START!!
    </button>
  );
};

export default StartBtn;
