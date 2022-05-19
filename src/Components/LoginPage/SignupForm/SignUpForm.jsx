import React, {useState} from "react";
import styles from './SignUpForm.module.css';

import {registerWithEmailAndPassword} from '../../../firebase'

function SignUpForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    return (
        <div className={styles.LoginForm}>
            <h2>SignUp</h2>
            <div className={styles.LoginInput}>
                <p>Username</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className={styles.LoginInput}>
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button onClick={() => registerWithEmailAndPassword(email, password, setError)}>SignUp</button>
            <p>{error ? error : ""}</p>
        </div>
    )
}

export default SignUpForm;