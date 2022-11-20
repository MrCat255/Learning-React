import style from "./styles.module.css";
import {
  selectBookCount,
  selectBookCountAll,
  selectPurchaseModule,
} from "../../store/purchase/selectors";
import { useSelector } from "react-redux";
import { selectGenresBookIds } from "../../store/genre/selectors";

export const CartPage = () => {
  const counts = useSelector((state) => selectBookCountAll(state));
  console.log(counts);
  // const bookIds = useSelector((state) =>
  //     selectGenresBookIds(state, activeGenre.id)
  // );
  Object.values(counts);
  console.log(counts);

  return (
    <main className={style.main}>
      <div>
        <h3>Ваш заказ:</h3>
        {counts.length > 0 &&
          counts.map((count) => <li key={count.id}>{count.name}</li>)}
      </div>
    </main>
  );
};
