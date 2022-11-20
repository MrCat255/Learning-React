import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Layout = (props) => {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <Link to="/">Магазин</Link>
        <Link to="/cart">Корзина</Link>
      </header>
      {props.children}
    </div>
  );
};
