import React from "react";
import styles from './SignUpForm.module.css';

function SignUpForm(){
    return (
        <div className={styles.LoginForm}>
            <h2>SignUp</h2>
            <div className={styles.LoginInput}>
                <p>Username</p>
                <input type="text"></input>
            </div>
            <div className={styles.LoginInput}>
                <p>Password</p>
                <input type="password"></input>
            </div>

            <button>SignUp</button>
        </div>
    )
}

export default SignUpForm;