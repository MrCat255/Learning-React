import { Book } from "../Book/Book";
import style from "./styles.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBooksIfNotExist } from "../../store/book/loadBooksIfNotExist";
import { selectIsBooksLoading } from "../../store/book/selectors";
import { selectGenresBookIds } from "../../store/genre/selectors";

export const Books = ({ activeGenre }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooksIfNotExist(activeGenre.id));
  }, [activeGenre.id]);

  const bookIds = useSelector((state) =>
    selectGenresBookIds(state, activeGenre.id)
  );
  const isLoading = useSelector((state) => selectIsBooksLoading(state));

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (!bookIds) {
    return null;
  }

  return (
    <div className={style.books}>
      {bookIds.length > 0 &&
        bookIds.map((id) => (
          <Book key={id} bookId={id} genre={activeGenre.name} />
        ))}
    </div>
  );
};
