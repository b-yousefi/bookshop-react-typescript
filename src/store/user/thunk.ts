import { AppThunk } from "./../index";
import axios from "axios";

import { fetchUser, registerUser, loginUser, logoutUser } from "./actions";
import User from "../../models/User";
import { plainToClass } from "class-transformer";

const USER_URL = `${process.env.REACT_APP_API_URL}/users`;

export const thunkFetchUser = (username: string): AppThunk => async (
  dispatch
) => {
  const url = `${USER_URL}/search/findUser?username=${username}`;

  const response = await axios.get(url);
  let fetchedUser: User = plainToClass(User, response.data as Object);

  dispatch(fetchUser(fetchedUser));
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