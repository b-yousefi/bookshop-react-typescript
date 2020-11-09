import { AuthorState } from "./state";
import { AuthorActionTypes, FETCH_AUTHORS, SELECT_AUTHOR } from "./types";

const initialState: AuthorState = {
  authors: [],
};

export function AuthorsReducer(
  state = initialState,
  action: AuthorActionTypes
): AuthorState {
  switch (action.type) {
    case FETCH_AUTHORS:
      return { authors: action.authors };
    case SELECT_AUTHOR:
    default:
      return state;
  }
}
