import style from './styles.module.css'

export const Review = (props) => {
    return <div className={style.review}>
        <div>
            <span>{props.review.name}</span>
            <span>{props.review.rating}</span>
        </div>
        <div>{props.review.text}</div>
    </div>
}