import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FirestoreProvider } from "react-firestore";

import firebase from "./firebase";
ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>,
  document.getElementById("root")
);
