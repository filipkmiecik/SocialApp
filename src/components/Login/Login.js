import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

import styles from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "e-mail") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const loginHandler = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <React.Fragment>
      <div className={styles.Container}>
        <p className={styles.Greeting}>Hey there. Good to see you again.</p>
      </div>
      <div className={styles.Container}>
        <p className={styles.Error}>{errorMessage}</p>
      </div>
      <form>
        <div className={styles.Container}>
          <label>
            E-MAIL{" "}
            <input
              className={styles.TextInput}
              name="e-mail"
              type="text"
              value={email}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={styles.Container}>
          <label>
            PASSWORD{" "}
            <input
              className={styles.TextInput}
              name="password"
              type="password"
              value={password}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={styles.Container}>
          <button className={styles.SubmitButton} onPress={loginHandler}>
            SIGN IN
          </button>
        </div>
      </form>
      <div className={styles.Container}>
        Don't have an account yet? <Link to="/register">Sign Up</Link>
      </div>
    </React.Fragment>
  );
};

export default Login;
