import style from './styles.module.css'
import {useState} from "react";

export const Genres = (props) => {
    const genres = props.genres;
    let [activeGenre, setActiveGenre] = useState(props.genres[0]);

    return <div className={style.genres}>
        <h3>Художественная литература</h3>
        {
            genres.map((genre) => <div key={genre.id} onClick={() => setActiveGenre(genre)}>{genre.name}</div>)
        }
    </div>
}