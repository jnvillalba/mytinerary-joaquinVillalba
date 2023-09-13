import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="389792427923-uph0cacbtfioqqrjo9vbl6g3e3p1gkm3.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    
  </Provider>
);
