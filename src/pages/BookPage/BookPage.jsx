import style from "./styles.module.css";
import { Book } from "../../components/Book/Book";
import { Review } from "../../components/Review/Review";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBookById,
  selectIsBooksLoading,
} from "../../store/book/selectors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadBookIfNotExist } from "../../store/book/loadBookIfNotExist";

export const BookPage = () => {
  const { bookId } = useParams();
  const [bId, setBID] = useState(bookId);

  console.log(bookId);
  const book = useSelector((state) => selectBookById(state, bookId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookIfNotExist(bookId));
    console.log(122345);
  }, []);

  const isLoading = useSelector((state) => selectIsBooksLoading(state));

  if (isLoading) {
    return <span>Loading...</span>;
  }
  // useEffect(() => {
  //   dispatch(loadBookIfNotExist);
  // }, []);
  console.log(book);
  console.log(123);

  console.log(!book);

  // if (!book) {
  //   return null;
  // }

  console.log(888);

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

      {/*<div className={style.reviews}>*/}
      {/*  {book.reviews.map((review) => (*/}
      {/*    <Review key={review.id} review={review} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </main>
  );
};
