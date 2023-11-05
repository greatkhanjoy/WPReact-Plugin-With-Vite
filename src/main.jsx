import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Frontend from "./Frontend.jsx";
import "./index.css";

// const root = document.getElementById("wpvite");
// if (root) {
//   ReactDOM.createRoot(document.getElementById("wpvite")).render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }

const root2 = document.getElementById("b2b-frontend");

if (root2) {
  const settingsData = document.getElementById("b2b-frontend-data");
  const data = JSON.parse(settingsData.innerHTML);
  settingsData.remove();

  ReactDOM.createRoot(document.getElementById("b2b-frontend")).render(
    <React.StrictMode>
      <Frontend data={data} />
    </React.StrictMode>
  );
}
