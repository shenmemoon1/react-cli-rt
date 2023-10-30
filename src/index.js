import ReactDom from "react-dom/client";
import React from "react";
import App from "./App"; // 假设 App 是你的根组件
import "./index.css";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
