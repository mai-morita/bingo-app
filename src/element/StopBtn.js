import React from "react";

const StopBtn = ({
  hitNum,
  setHitNum,
  setRandomArray,
  randomArray,
  setIsShuffle,
}) => {
  // useStateで作った数字を保存する関数を利用して数字を保存す
  const handleClickBtn = () => {
    setIsShuffle(false);
    const num = randomArray.pop();
    // useStateで作った数字を保存する関数を利用して数字を保存する
    setRandomArray(randomArray);
    setHitNum([...hitNum, num]);
  };
  return (
    <button className="PushButton" onClick={handleClickBtn}>
      STOP!
    </button>
    /* useStateで作った数字を一旦表示する */
  );
};

export default StopBtn;
