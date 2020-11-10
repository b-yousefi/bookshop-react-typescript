import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import axios from "axios";

import { store } from "./store/index";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

const routing = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
