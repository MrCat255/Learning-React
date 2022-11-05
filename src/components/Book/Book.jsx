import style from './styles.module.css'
import {useState} from "react";

export const Book = (props) => {
    const [count, setCount] = useState(0);

    return <div className={style.book}>
        <div>
            <h3>{props.book.name}</h3>
            <div>
                <span>{props.book.author}</span>
                <span>{props.genre}</span>
                <span>{props.book.rating}</span>
            </div>
            <span className={style.price}>{props.book.price} &#8381;</span>
        </div>
        <div>
            <button onClick={() => setCount(count - 1)} disabled={count===0}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)} disabled={count===6}>+</button>
        </div>
    </div>
}
