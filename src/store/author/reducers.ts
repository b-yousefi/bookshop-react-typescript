import { AuthorState } from "./state";
import { AuthorActionTypes, FETCH_AUTHORS, SELECT_AUTHOR } from "./types";

const initialState: AuthorState = {
  arr: [],
};

export function AuthorsReducer(
  state: AuthorState = initialState,
  action: AuthorActionTypes
): AuthorState {
  switch (action.type) {
    case FETCH_AUTHORS:
      return { arr: action.authors };
    case SELECT_AUTHOR:
    default:
      return state;
  }
}
