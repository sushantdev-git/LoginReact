import React, {useState, useEffect} from "react";
import styles from './LoginForm.module.css';

import {logInWithEmailAndPassword, auth} from '../../../firebase';

function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    return(
        <div className={styles.LoginForm}>
            <h2>Login</h2>
            <div className={styles.LoginInput}>
                <p>Username</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className={styles.LoginInput}>
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button onClick={() => logInWithEmailAndPassword(email, password, setError)}>Login</button>
            <p>{error ? error : ""}</p>
        </div>
    );
}

export default LoginForm;