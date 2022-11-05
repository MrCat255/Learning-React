import styles from './styles.module.css'

export const Layout = (props) => {
    return <div className={styles.body}>
        <header className={styles.header}>
            <span>Магазин</span>
        </header>
        { props.children }
    </div>
}