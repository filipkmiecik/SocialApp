import React, { createContext, useContext, useState, useEffect } from "react";
import firebase from "firebase";

const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((signedUser) => {
      setUser(signedUser);
    });
  });

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
