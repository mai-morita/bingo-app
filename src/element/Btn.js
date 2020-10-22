import React, {useState} from "react";

const Btn = () => {
    // useStateで作った数字を保存する関数を利用して数字を保存する
    const [num, setNum] = useState(0);
    const handleClick = () => {
        const randomNumber = Math.floor( Math.random() * 75 + 1 ) ; //乱数の取得
        // useStateで作った数字を保存する関数を利用して数字を保存する
        setNum(randomNumber);
    }
    return(
        <>
            <button className="PushButton" onClick={handleClick}>START!</button>
            <div>{num}</div>
        </>
        /* useStateで作った数字を一旦表示する */
    )
};

export default Btn;

    // 乱数のコードメモ
    // const Random() => {
    //     var num = Math.floor( Math.random() * 75 + 1 ) ; //乱数の取得
    //     document.getElementById("hit-number").innerHTML = num; //乱数の出力
    // }

    // var a = Math.floor( Math.random() * 11 ) ;