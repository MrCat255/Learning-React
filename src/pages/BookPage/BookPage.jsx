import style from './styles.module.css'
import {Book} from "../../components/Book/Book";
import {Review} from "../../components/Review/Review";

export const BookPage = (props) => {

    return <main className={style.main}>
        <div className={style.info}>
            <Book book={props.book}/>
            <div className={style.description}>
                <h3>Аннотация</h3>
                <div>{props.book.description}</div>
            </div>
        </div>
        <div className={style.reviews}>
            {
                props.book.reviews.map((review) => <Review key={review.id} review={review}/>)
            }
        </div>
    </main>
}