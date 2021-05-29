import {
  FETCH_BOOK,
  FILTER_BOOKS,
  LOADING_BOOKS,
  BookActionTypes,
} from "./types";
import Book from "models/Book";
import { BookState } from "./state";
import BooksFilter from "models/BooksFilter";

const INITIAL_STATE: BookState = {
  arr: [],
  currentFilter: new BooksFilter([], [], []),
  loading: false,
  selectedBook: {} as Book,
  pageInfo: { size: 0, totalElements: 0, totalPages: 0, pageNumber: 0 },
};

export function BooksReducer(
  state = INITIAL_STATE,
  action: BookActionTypes
): BookState {
  switch (action.type) {
    case FILTER_BOOKS:
      return {
        ...state,
        arr: action.books,
        currentFilter: action.filter,
        pageInfo: action.pageInfo,
      };
    case FETCH_BOOK:
      return { ...state, selectedBook: action.book };
    case LOADING_BOOKS:
      return { ...state, loading: action.loading };
    default:
      return state;
  }
}
