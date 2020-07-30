import React from "react";

import styles from "./Login.module.css";

const Login = (props) => (
  <React.Fragment>
    <div className={styles.Container}>
      <p className={styles.Greeting}>Hey there. Good to see you again.</p>
    </div>
    <div className={styles.Container}>
      <p className={styles.Error}></p>
    </div>
    <form>
      <div className={styles.Container}>
        <label>
          E-MAIL <input className={styles.TextInput} type="text" />
        </label>
      </div>
      <div className={styles.Container}>
        <label>
          PASSWORD <input className={styles.TextInput} type="text" />
        </label>
      </div>
      <div className={styles.Container}>
        <button>SIGN IN</button>
      </div>
    </form>
  </React.Fragment>
);

export default Login;
