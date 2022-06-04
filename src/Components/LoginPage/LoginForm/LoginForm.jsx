import React, {useState} from "react";
import styles from './LoginForm.module.css';

import {logInWithEmailAndPassword} from '../../../firebase';

function LoginForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        await logInWithEmailAndPassword(email, password, setError)
        setLoading(false);
    }

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

            <button onClick={handleLogin}>Login</button>
            <p>{error ? error : null}</p>
            <p>{loading ? "loading please wait..." : null}</p>
        </div>
    );
}

export default LoginForm;