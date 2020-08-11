import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

import styles from "./Register.module.css";

const Register = (props) => {
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

  const registerHandler = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <React.Fragment>
      <div className={styles.Container}>
        <p className={styles.Greeting}>
          Fill in the form and let's get started!
        </p>
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
              type="text"
              value={password}
              onChange={onChangeHandler}
            />
          </label>
        </div>
        <div className={styles.Container}>
          <button className={styles.SubmitButton} onClick={registerHandler}>
            SIGN IN
          </button>
        </div>
      </form>
      <div className={styles.Container}>
        Already have an account?<Link to="/login"> Sign In</Link>
      </div>
    </React.Fragment>
  );
};

export default Register;
