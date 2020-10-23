import React from "react";

const Btn = ({ hitNum, setHitNum, setRandomArray, randomArray }) => {
  // useStateで作った数字を保存する関数を利用して数字を保存する
  const handleClick = () => {
    const num = randomArray.pop();
    // useStateで作った数字を保存する関数を利用して数字を保存する
    setRandomArray(randomArray);
    setHitNum([...hitNum, num]);
  };
  return (
    <button className="PushButton" onClick={handleClick}>
      START!
    </button>
    /* useStateで作った数字を一旦表示する */
  );
};

export default Btn;
