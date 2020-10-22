import React, {useState} from "react";
import "../index.css";
import Btn from "./Btn";

const App = () => {
    // useStateで数字を保存する
    const [hitNum, setHitNum] = useState([]);
    const listItems = hitNum.map((number) =>
    <li>{number}</li>
    );
    return (
        <div className="container">
            <Btn setHitNum={setHitNum} hitNum={hitNum}/>
            <ul>{listItems}</ul>
        </div>
    )
}


export default App;