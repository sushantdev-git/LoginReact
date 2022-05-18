import React from "react";
import styles from './LoginForm.module.css';


function LoginForm(){

    return(
        <div className={styles.LoginForm}>
            <h2>Login</h2>
            <div className={styles.LoginInput}>
                <p>Username</p>
                <input type="text"></input>
            </div>
            <div className={styles.LoginInput}>
                <p>Password</p>
                <input type="password"></input>
            </div>

            <button>Login</button>
        </div>
    );
}

export default LoginForm;