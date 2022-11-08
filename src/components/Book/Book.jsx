import style from './styles.module.css'
import {Counter} from "../Counter/Counter";

export const Book = (props) => {

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
        <Counter/>
    </div>
}
