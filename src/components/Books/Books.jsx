import {Book} from "../Book/Book";
import style from './styles.module.css'

export const Books = ({activeGenre}) => {

    return <div className={style.books}>
        {
            activeGenre.books.map((book) => <Book key={book.id} book={book} genre={activeGenre.name}/>)
        }
    </div>
}