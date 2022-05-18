import React, {useState}from "react";
import styles from './LoginPage.module.css';

import LoginForm from "../../Components/LoginPage/LoginForm/LoginForm";
import SignUpForm from "../../Components/LoginPage/SignupForm/SignUpForm";

function LoginPage(){

    const [Login, setLogin] = useState(true);

    return(
        <div className={styles.LoginPage}>
            <div className={styles.LoginForm}>
                {Login ? <LoginForm /> : <SignUpForm />}
                <button onClick={() => setLogin(!Login)}>{Login ? "SignUp" : "Login"}</button>
            </div>
        </div>
    )
}

export default LoginPage;