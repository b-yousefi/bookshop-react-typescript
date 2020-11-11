import {
  FETCH_BOOK,
  FILTER_BOOKS,
  LOADING_BOOKS,
  BookActionTypes,
} from "./types";
import Book from "../../models/Book";
import { BookState } from "./state";
import BooksFilter from "../../models/BooksFilter";

const INITIAL_STATE: BookState = {
  arr: [],
  currentFilter: new BooksFilter([], [], []),
  loading: false,
  selectedBook: {} as Book,
};

export function BooksReducer(
  state = INITIAL_STATE,
  action: BookActionTypes
): BookState {
  switch (action.type) {
    case FILTER_BOOKS:
      return { ...state, arr: action.books, currentFilter: action.filter };
    case FETCH_BOOK:
      return { ...state, selectedBook: action.book };
    case LOADING_BOOKS:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
