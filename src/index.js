import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

firebase.initializeApp({
  apiKey: "AIzaSyAMV-QpFev5tAA0-YkbUAdEIObPYdErvPw",
  authDomain: "trip-app-69cb6.firebaseapp.com",
  projectId: "trip-app-69cb6",
  storageBucket: "trip-app-69cb6.appspot.com",
  messagingSenderId: "164891137947",
  appId: "1:164891137947:web:977ac093711aec1e3cf33e",
});

export const Context = createContext(null);
const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context.Provider value={{ firestore, auth, firebase }}>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>{" "}
    </Context.Provider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
