import style from "./styles.module.css";
import { selectBookCountAll } from "../../store/purchase/selectors";
import { useSelector } from "react-redux";
import { store } from "../../store";
import { Book } from "../../components/Book/Book";

export const CartPage = () => {
  const counts = useSelector((state) => selectBookCountAll(state));

  const keys = Object.keys(counts);

  // const book = useSelector((state) => selectBookById(state, bookId));
  // console.log(book);

  let total = 0;
  let books = [];
  for (let i = 0; i < keys.length; i++) {
    let book = {};
    book.book = store.getState().book.entities[keys[i]];
    book.quantity = store.getState().purchase[keys[i]];
    books.push(book);
    total += book.book.price * book.quantity;
  }

  return (
    <main className={style.main}>
      <div>
        <div>
          <h3>Ваш заказ:</h3>
          <ul>
            {books.length > 0 &&
              books.map((book) => (
                <li key={book.book.id}>
                  <span>{book.book.name}</span>
                  <span className={style.price}>
                    {book.book.price * book.quantity}
                  </span>
                </li>
              ))}
          </ul>
        </div>
        <div className={style.buying}>
          <div>
            <span>Итого:</span>
            <span>{total}</span>
          </div>
          <button>Купить</button>
        </div>
      </div>
      <div className={style.books}>
        {books.length > 0 &&
          books.map((book) => (
            <Book key={book.book.id} bookId={book.book.id} />
          ))}
      </div>
    </main>
  );
};
