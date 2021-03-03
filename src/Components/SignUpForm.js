import '../styles/SignUpStyle.scss'
import styles from '../styles/loginpage.module.scss';
import utilStyles from '../styles/utils.module.scss';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { config } from 'firebase-functions';

import React, {useState} from 'react';
import { auth } from 'firebase-admin';



export default function SignUpForm() {
    
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
    function configUser(event, email, password){
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log(user);
        })
        .catch((err) => {
            console.log(err);
        })
        setFirstName("");
        setPassword("");
        setEmail("");
    }

    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return(
        <>
        
        <br/>
        <form className="signUpForm">
            <label for="firstName">First Name</label>
            <input type="text" placeholder="John" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <label for="surname">Surname</label>
            <input type="text" placeholder="Doe" name="surname" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            <label for="email">Email</label>
            <input type="email" placeholder="john.doe@gmail.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label for="password">Password</label>
            <input type="password" placeholder="•••••" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className={`${styles.button} ${utilStyles.cWhite}`} onClick={(e) => {configUser(e, email, password)}}>Sign-Up</button>
        </form>

        </>
    )
}