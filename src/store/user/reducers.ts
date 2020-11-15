import {
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  UserActionTypes,
} from "./types";
import { UserState } from "./state";

const INITIAL_STATE: UserState = {
  isLoggedIn: false,
  user: {} as any,
  token: "",
};

export function UserReducer(
  state: UserState = INITIAL_STATE,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, user: action.user };
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
      };
    case LOGOUT_USER:
      return { ...INITIAL_STATE };
    case REGISTER_USER:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}
