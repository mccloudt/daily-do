import Header from './Header';
import { Link } from 'react-router-dom'
import styles from '../styles/loginpage.module.scss';
import utilStyles from '../styles/utils.module.scss';
import '../styles/navStyles.scss'


export default function Nav(props) {
    return(
        <>
            <div className="layout">
                <Header/>
                {!props.loggedIn
                &&<div className={`${styles.loginButtons}`}>
                        <Link to="/" className={`${styles.button} ${styles.fontUIControl} ${utilStyles.cWhite}`}>Home</Link>
                        <Link to="/sign-up" className={`${styles.button} ${styles.fontUIControl} ${utilStyles.cWhite}`}>Sign-Up</Link>
                        <Link to="/login" className={`${styles.button} ${styles.fontUIControl} ${utilStyles.cWhite}`}>Login</Link>
                </div>}

                {props.loggedIn && <p className={`${utilStyles.cWhite} ${utilStyles.contentFont}`}>Logged in as: {props.email}</p>}
            </div>
        </>

    )
}