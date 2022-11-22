import style from "./styles.module.css";
import { Book } from "../../components/Book/Book";
import { Review } from "../../components/Review/Review";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBookById,
  selectIsBooksLoading,
} from "../../store/book/selectors";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { loadBookIfNotExist } from "../../store/book/loadBookIfNotExist";
import { loadFeedbacksIfNotExist } from "../../store/feedback/loadBooksIfNotExist";

export const BookPage = () => {
  const { bookId } = useParams();

  const book = useSelector((state) => selectBookById(state, bookId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookIfNotExist(bookId));
  }, []);

  useEffect(() => {
    dispatch(loadFeedbacksIfNotExist(book.id));
  }, [book.id]);

  const isLoading = useSelector((state) => selectIsBooksLoading(state));

  if (isLoading) {
    return <span>Loading...</span>;
  }

  // useEffect(() => {
  //   dispatch(loadBookIfNotExist);
  // }, []);

  return (
    <main className={style.main}>
      {book !== undefined ? (
        <div className={style.info}>
          <Book bookId={book.id} />
          <div className={style.description}>
            <h3>Аннотация</h3>
            <div>{book.description}</div>
          </div>
        </div>
      ) : null}
      {book !== undefined ? (
        <div className={style.reviews}>
          {book.reviews.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      ) : null}
    </main>
  );
};
