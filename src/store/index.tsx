import thunk, { ThunkMiddleware } from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, Action } from "redux";

import { ThunkAction } from "redux-thunk";

import { AuthorsReducer } from "./author/reducers";
import { AuthorActionTypes } from "./author/types";
import { AuthorState } from "./author/state";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type AppActions = AuthorActionTypes; // Assume other action interfaes will be added via union.

export interface AppState {
  authors: AuthorState;
}

const RootReducer = combineReducers({
  authors: AuthorsReducer,
});

// export type AppState = ReturnType<typeof RootReducer>;

export const store = createStore(
  RootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
