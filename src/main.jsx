import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Frontend from "./Frontend.jsx";
import "./index.css";

const root = document.getElementById("wpvite");
if (root) {
  ReactDOM.createRoot(document.getElementById("wpvite")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root2 = document.getElementById("wpvite-frontend");

if (root2) {
  ReactDOM.createRoot(document.getElementById("wpvite-frontend")).render(
    <React.StrictMode>
      <Frontend />
    </React.StrictMode>
  );
}
