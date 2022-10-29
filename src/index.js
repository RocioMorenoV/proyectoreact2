import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwAi3hMyW2kfHK5mCJTtwvnZkAvkZl-XA",
  authDomain: "react-rocioblue.firebaseapp.com",
  projectId: "react-rocioblue",
  storageBucket: "react-rocioblue.appspot.com",
  messagingSenderId: "514340650842",
  appId: "1:514340650842:web:9bc0f55774236d65897d63",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
