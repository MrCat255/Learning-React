import style from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectBookCount } from "../../store/purchase/selectors";
import { purchaseSlice } from "../../store/purchase";

export const Counter = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectBookCount(state, props.bookId));

  return (
    <div className={style.counter}>
      <button
        onClick={() => dispatch(purchaseSlice.actions.removeBook(props.bookId))}
        disabled={count === 0 || count === undefined}
      >
        -
      </button>
      <span className={`${!count ? "" : style.black}`}>{count || 0}</span>
      <button
        onClick={() => dispatch(purchaseSlice.actions.addBook(props.bookId))}
        disabled={count === 6}
      >
        +
      </button>
    </div>
  );
};
