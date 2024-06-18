import styles from './page.module.scss'

const NotFound =() => {
    return(
        <main className={`${styles.place}`}>
            <div className={`${styles.place__not_found}`}>
                <h1 className={`${styles.place__title}`}>404</h1>
                <h1>NotFound</h1>
            </div>
        </main>
    )
}

export default NotFound