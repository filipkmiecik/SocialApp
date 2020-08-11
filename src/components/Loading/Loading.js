import React, { useEffect } from "react";
import { Redirect } from "react-router";
import styles from "./Loading.module.css";
import Home from "../Home/Home";
import Login from "../Login/Login";
import firebase from "firebase";

const Loading = (props) => {
  const user = null;
  return user ? <Home /> : <Redirect to="/login" />;
};

export default Loading;
