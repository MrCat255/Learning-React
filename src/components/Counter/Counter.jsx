import style from "./styles.module.css";
import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return <div className={style.counter}>
        <button onClick={() => setCount(count - 1)} disabled={count===0}>-</button>
        <span className={`${!count ? '' : style.black}`}>{count}</span>
        <button onClick={() => setCount(count + 1)} disabled={count===6}>+</button>
    </div>
}