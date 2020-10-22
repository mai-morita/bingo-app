import React from "react";

const Btn = ({ setHitNum, hitNum }) => {
    // useStateで作った数字を保存する関数を利用して数字を保存する
    const handleClick = () => {
        const randomNumber = Math.floor( Math.random() * 75 + 1 ) ; //乱数の取得
        // useStateで作った数字を保存する関数を利用して数字を保存する
        setHitNum([...hitNum,randomNumber]);
    }
    return(
            <button className="PushButton" onClick={handleClick}>START!</button>
        /* useStateで作った数字を一旦表示する */
    )
};

export default Btn;