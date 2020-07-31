import React, { useState } from "react";

import styles from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (event) => {
    setEmail(event.target.value);
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
              type="text"
              value={email}
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className={styles.Container}>
          <label>
            PASSWORD{" "}
            <input className={styles.TextInput} type="text" value={password} />
          </label>
        </div>
        <div className={styles.Container}>
          <button className={styles.SubmitButton}>SIGN IN</button>
        </div>
      </form>
      <div className={styles.Container}>Don't have an account yet? Sign Up</div>
    </React.Fragment>
  );
};

export default Login;
