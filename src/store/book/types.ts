import { PageInfo } from "models/PageInfo";
import Book from "models/Book";
import BooksFilter from "models/BooksFilter";

export const FILTER_BOOKS = "FILTER_BOOKS";
export const LOADING_BOOKS = "LOADING_BOOKS";
export const FETCH_BOOK = "FETCH_BOOK";

interface FilterBooksAction {
  type: typeof FILTER_BOOKS;
  books: Book[];
  filter: BooksFilter;
  pageInfo: PageInfo;
}

interface FetchBookAction {
  type: typeof FETCH_BOOK;
  book: Book;
}

interface LoadingBooksAction {
  type: typeof LOADING_BOOKS;
  loading: boolean;
}

export type BookActionTypes =
  | FetchBookAction
  | FilterBooksAction
  | LoadingBooksAction;
