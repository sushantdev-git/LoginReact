import React from "react";
import styles from './LoginPage.module.css';

import LoginForm from "../../Components/LoginPage/LoginForm/LoginForm";

function LoginPage(){
    return(
        <div className={styles.LoginPage}>
            <div className={styles.LoginForm}>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;