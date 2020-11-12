import User from "../../models/User";

export const FETCH_USER = "FETCH_USER";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

interface FetchUser {
  type: typeof FETCH_USER;
  user: User;
}

interface RegisterUser {
  type: typeof REGISTER_USER;
  user: User;
}

interface LoginUser {
  type: typeof LOGIN_USER;
  token: string;
}

interface LogoutUser {
  type: typeof LOGOUT_USER;
}

export type UserActionTypes = FetchUser | RegisterUser | LoginUser | LogoutUser;
