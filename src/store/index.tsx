import thunk, { ThunkMiddleware } from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, Action } from "redux";

import { ThunkAction } from "redux-thunk";

import { AuthorsReducer } from "./author/reducers";
import { AuthorActionTypes } from "./author/types";
import { AuthorState } from "./author/state";
import { BooksReducer } from "./book/reducers";
import { BookActionTypes } from "./book/types";
import { BookState } from "./book/state";
import { PublicationsReducer } from "./publication/reducers";
import { PublicationActionTypes } from "./publication/types";
import { PublicationState } from "./publication/state";
import { CategoriesReducer } from "./category/reducers";
import { CategoryActionTypes } from "./category/types";
import { CategoryState } from "./category/state";
import { UserReducer } from "./user/reducers";
import { UserActionTypes } from "./user/types";
import { UserState } from "./user/state";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export type AppActions =
  | AuthorActionTypes
  | BookActionTypes
  | PublicationActionTypes
  | CategoryActionTypes
  | UserActionTypes;

export interface AppState {
  authors: AuthorState;
  books: BookState;
  publications: PublicationState;
  categories: CategoryState;
  user: UserState;
}

const RootReducer = combineReducers({
  authors: AuthorsReducer,
  books: BooksReducer,
  publications: PublicationsReducer,
  categories: CategoriesReducer,
  user: UserReducer,
});

// export type AppState = ReturnType<typeof RootReducer>;

export const store = createStore(
  RootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
