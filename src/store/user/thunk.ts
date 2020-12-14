import { AppThunk } from "./../index";
import axios from "axios";

import {
  fetchUser,
  registerUser,
  loginUser,
  logoutUser,
  updateUser,
} from "./actions";
import { fetchShoppingCart } from "../shoppingCart/actions";
import User from "../../models/User";
import { plainToClass } from "class-transformer";
import Order from "../../models/Order";

const USER_URL = `${process.env.REACT_APP_API_URL}/users`;

export const thunkFetchUser = (username: string): AppThunk => async (
  dispatch
) => {
  const url = `${USER_URL}/search/findUser?username=${username}`;

  const response = await axios.get(url);
  let fetchedUser: User = plainToClass(User, response.data as Object);

  dispatch(fetchUser(fetchedUser));

  let cart: Order = plainToClass(Order, response.data.openOrder as Object);

  dispatch(fetchShoppingCart(cart));
};

export const thunkRegsiterUser = (user: User): AppThunk => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/register`;

  const response = await axios.post(url, JSON.stringify(user));
  dispatch(registerUser(user));
  dispatch(thunkLoginUser(user.username, user.password));
};

export const thunkLoginUser = (
  username: string,
  password: string
): AppThunk => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}/authenticate`;

  const response = await axios({
    method: "POST",
    url,
    data: JSON.stringify({ username, password }),
  });

  const token = `Token ${response.data.token}`;

  axios.defaults.headers.common["Authorization"] = token;

  dispatch(loginUser(token));
  dispatch(thunkFetchUser(username));
};

export const thunkLogoutUser = (): AppThunk => async (dispatch) => {
  delete axios.defaults.headers.common["Authorization"];
  dispatch(logoutUser());
};

export const thunkUpdateUser = (user: User): AppThunk => async (dispatch) => {
  const url = user._links?.self.href;
  if (url) {
    const response = await axios.patch(url, JSON.stringify(user));
    let updatededUser: User = plainToClass(User, response.data as User);
    dispatch(updateUser(updatededUser));
  } else {
    throw new Error("Link to user does not exists!!!");
  }
};
