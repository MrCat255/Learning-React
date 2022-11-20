import style from "./styles.module.css";
import { Counter } from "../Counter/Counter";
import { useSelector } from "react-redux";
import { selectBookById } from "../../store/book/selectors";
import { Link } from "react-router-dom";

export const Book = (props) => {
  const book = useSelector((state) => selectBookById(state, props.bookId));

  if (!book) {
    return null;
  }

  const bookPath = `/book/${book.id}`;

  return (
    <div className={style.book}>
      <div>
        <Link to={bookPath}>
          <h3>{book.name}</h3>
        </Link>
        <div>
          <span>{book.author}</span>
          <span>{props.genre}</span>
          <span>{book.rating}</span>
        </div>
        <span className={style.price}>{book.price} &#8381;</span>
      </div>
      <Counter bookId={props.bookId} />
    </div>
  );
};
