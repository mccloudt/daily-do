import Header from '../Components/Header';
import styles from '../styles/loginpage.module.scss';
import utilStyles from '../styles/utils.module.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUpForm from './SignUpForm'

export default function LoginPage(props) {

    return (
        <>
        <Router>
            <Header/>
            <div className={`${styles.loginButtons}`}>
                    <Link to="/sign-up" className={`${styles.button} ${styles.fontUIControl} ${utilStyles.cWhite}`}>Sign-Up</Link>
                    <Link to="/" className={`${styles.button} ${styles.fontUIControl} ${utilStyles.cWhite}`}>Login</Link>
            </div>



            <Switch>
            <Route path="/sign-up">
                <SignUpForm/>
            </Route>
            </Switch>
        </Router>
            
        <footer>
            Made with ❤️ by Tom McCloud
        </footer>
        </>
    )


}