import style from './styles.module.css';
import {Books} from "../../components/Books/Books";
import {useState} from "react";

export const GenrePage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.genres[0]);

    return <main className={style.main}>
        <ul className={style.genres}>
            {
                props.genres.map((genre) => <li key={genre.id} onClick={() => setActiveGenre(genre)} className={`${genre.name !== activeGenre.name ? '' : style.focus}`}>{genre.name}</li>)
            }
        </ul>
        <Books activeGenre={activeGenre}/>
    </main>
}