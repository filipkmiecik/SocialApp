import React from "react";
import Loading from "./components/Loading/Loading";
import Login from "./components/Login/Login";
import "./App.css";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCSxJ4bMEFhJxYHcWGFNiqBD4DP3YXYK4E",
  authDomain: "socialapp-780c5.firebaseapp.com",
  databaseURL: "https://socialapp-780c5.firebaseio.com",
  projectId: "socialapp-780c5",
  storageBucket: "socialapp-780c5.appspot.com",
  messagingSenderId: "668642571354",
  appId: "1:668642571354:web:954655b143bce3f5dcd463",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
