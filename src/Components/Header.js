import styles from '../styles/utils.module.scss'
export default function Header(props){
    return (
        <>
            <div className={`${styles.flexCol}`}>
                <h1 className={`${styles.fontLg} ${styles.tMg} ${styles.centerText} ${styles.cWhite} ${styles.headingFont}`}>Daily-Do</h1>
                <p className={`${styles.fontP} ${styles.alpha} ${styles.centerText} ${styles.cWhite} ${styles.contentFont}`}>Track your daily tasks. Easily.</p>
            </div>
        </>
    )
}