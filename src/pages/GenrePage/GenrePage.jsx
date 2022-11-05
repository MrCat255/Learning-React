import style from './styles.module.css';
import {Books} from "../../components/Books/Books";
import {useState} from "react";

export const GenrePage = (props) => {
    const [activeGenre, setActiveGenre] = useState(props.genres[0]);

    return <main className={style.main}>
        <div className={style.genres}>
            <h3>Художественная литература</h3>
            {
                props.genres.map((genre) => <div key={genre.id} onClick={() => setActiveGenre(genre)}>{genre.name}</div>)
            }
        </div>
        <Books activeGenre={activeGenre}/>
    </main>
}