import style from "./styles.module.css";
import { Books } from "../../components/Books/Books";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectGenres } from "../../store/genre/selectors";
import { loadGenresIfNotExist } from "../../store/genre/loadGenresIfNotExist";

export const GenrePage = () => {
  const genres = useSelector((state) => selectGenres(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGenresIfNotExist);
  }, []);

  const [activeGenre, setActiveGenre] = useState(genres[0]);

  return (
    <main className={style.main}>
      <ul className={style.genres}>
        {genres.length > 0 &&
          genres.map((genre) => (
            <li
              key={genre.id}
              onClick={() => setActiveGenre(genre)}
              className={`${genre.id !== activeGenre?.id ? "" : style.focus}`}
            >
              {genre.name}
            </li>
          ))}
      </ul>
      {activeGenre && <Books activeGenre={activeGenre} />}
    </main>
  );
};
