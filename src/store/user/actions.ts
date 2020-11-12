import {
  UserActionTypes,
  FETCH_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "./types";
import User from "../../models/User";

export function fetchUser(user: User): UserActionTypes {
  return {
    type: FETCH_USER,
    user,
  };
}

export function registerUser(user: User): UserActionTypes {
  return {
    type: REGISTER_USER,
    user,
  };
}

export function loginUser(token: string): UserActionTypes {
  return {
    type: LOGIN_USER,
    token,
  };
}

export function logoutUser(): UserActionTypes {
  return {
    type: LOGOUT_USER,
  };
}
