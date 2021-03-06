import thunk, { ThunkMiddleware } from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, Action } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
import { ShoppingCartReducer } from "./shoppingCart/reducers";
import { ShoppingCartActionsType } from "./shoppingCart/types";
import { ShoppingCartState } from "./shoppingCart/state";
import { FilterReducer } from "./filter/reducers";
import { FilterActionTypes } from "./filter/types";
import { FilterState } from "./filter/state";
import { AddressesReducer } from "./address/reducers";
import { AddressActionTypes } from "./address/types";
import { AddressState } from "./address/state";
import { OrdersReducer } from "./order/reducers";
import { OrderActionTypes } from "./order/types";
import { OrderState } from "./order/state";

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
  | UserActionTypes
  | ShoppingCartActionsType
  | FilterActionTypes
  | AddressActionTypes
  | OrderActionTypes;

export interface AppState {
  authors: AuthorState;
  books: BookState;
  publications: PublicationState;
  categories: CategoryState;
  user: UserState;
  shoppingCart: ShoppingCartState;
  filter: FilterState;
  addresses: AddressState;
  orders: OrderState;
}

const RootReducer = combineReducers({
  authors: AuthorsReducer,
  books: BooksReducer,
  publications: PublicationsReducer,
  categories: CategoriesReducer,
  user: UserReducer,
  shoppingCart: ShoppingCartReducer,
  filter: FilterReducer,
  addresses: AddressesReducer,
  orders: OrdersReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user", "filter"],
};

const pReducer = persistReducer(persistConfig, RootReducer);

// export type AppState = ReturnType<typeof RootReducer>;

export const store = createStore(
  pReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);

export const persistor = persistStore(store);
