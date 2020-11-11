import thunk, { ThunkMiddleware } from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, Action } from "redux";

import { ThunkAction } from "redux-thunk";

import { AuthorsReducer } from "./author/reducers";
import { BooksReducer } from "./book/reducers";
import { AuthorActionTypes } from "./author/types";
import { AuthorState } from "./author/state";
import { BookActionTypes } from "./book/types";
import { BookState } from "./book/state";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type AppActions = AuthorActionTypes | BookActionTypes;

export interface AppState {
  authors: AuthorState;
  books: BookState;
}

const RootReducer = combineReducers({
  authors: AuthorsReducer,
  books: BooksReducer,
});

// export type AppState = ReturnType<typeof RootReducer>;

export const store = createStore(
  RootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
