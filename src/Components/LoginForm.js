import '../styles/SignUpStyle.scss'
import styles from '../styles/loginpage.module.scss';
import utilStyles from '../styles/utils.module.scss';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import {Redirect} from 'react-router-dom';
import React, { useState } from 'react';

export default function LoginForm(props) {
    var firebaseConfig = {
        apiKey: "AIzaSyBeAD7VJGSQ_FuxcByqIKsIJzDEU9TPukE",
        authDomain: "daily-do-mcc.firebaseapp.com",
        projectId: "daily-do-mcc",
        storageBucket: "daily-do-mcc.appspot.com",
        messagingSenderId: "817627279134",
        appId: "1:817627279134:web:63fe4cbd81214c9a82e30f",
        measurementId: "G-VJYQJ8099X"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig)
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (event, email, password) => {
        console.log("click");
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(user);
                props.handleLogin(user.email);
            })
            .catch((err) => {
                var errorCode = err.code;
                var errorMessage = err.message;
                alert(errorCode, errorMessage);
            })

    }

    return(
        <>
        
        <br/>
        <form className="signUpForm">
            <label autocomplete="off" for="email">Email</label>
            <input autocomplete="off" type="email" placeholder="john.doe@gmail.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label autocomplete="off" for="password">Password</label>
            <input autocomplete="off" type="password" placeholder="•••••" name="password" onChange={(e) => setPassword(e.target.value)}/>
            <button className={`${styles.button} ${utilStyles.cWhite}`} onClick={(e) => handleSignIn(e, email, password)}>Login</button>
        </form>

        </>
    )
}