import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { AuthorsReducer } from "./store/author/reducers";

import { createStore, applyMiddleware, Store, Dispatch } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import axios from "axios";

import { AuthorActionTypes, DispatchType } from "./store/author/types";
import { AuthorState } from "./store/author/state";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";

const store: Store<AuthorState, AuthorActionTypes> & {
  dispatch: Dispatch<AuthorActionTypes> & DispatchType;
} = createStore(AuthorsReducer, applyMiddleware(ReduxThunk));

const routing = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
