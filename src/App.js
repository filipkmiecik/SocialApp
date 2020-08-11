import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import UserProvider from "./providers/UserProvider";
import routes from "./router/routes";

import firebase from "firebase";

const firebaseConfig = {
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
    <UserProvider>
      <BrowserRouter>
        <Loading />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
