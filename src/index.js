import React from "react";
import ReactDOM from "react-dom";
import App from "./element/App";

ReactDOM.render(<App />, document.getElementById("root"));

// randomArray: シャッフルした配列
// hitNum: 今まで出た数字の配列
// hitNum = 3
// hutNum = [3]

// setHitNum: hitNumを更新できる
// setRandomArray: randomArrayをこうしんできる

// 今からしたい事
// ボタンを押して(handleClick)、
// そのシャッフルされた配列(randomArray)から数字をとって
// 表示する配列(hitNum)に入れる
