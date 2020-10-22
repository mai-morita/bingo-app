import React from "react";
import "../index.css";
import Btn from "./Btn";

const App = () => {
    // useStateで数字を保存する
    return (
        <div className="container">
            <h1>Hello! World.</h1>
            <p>このページはテストページです。</p>
            <Btn/>
            {/* <DisplayNumber /> */}
        </div>
    )
}


export default App;