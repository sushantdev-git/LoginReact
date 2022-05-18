import React from "react";
import styles from './LoginForm.module.css';


function LoginForm(){

    return(
        <div className={styles.LoginForm}>
            <div>
                <h3>Username</h3>
                <input type="text"></input>
                <h3>Password</h3>
                <input type="password"></input>
                <br></br>
                <br></br>
                <button>Login</button>
            </div>
        </div>
    );
}

export default LoginForm;