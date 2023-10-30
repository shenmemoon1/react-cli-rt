import ReactDom from "react-dom/client";
import React from "react";
import App from "./App"; // 假设 App 是你的根组件
import "./index.css";
import { Provider } from "react-redux";
import store from "../store";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
