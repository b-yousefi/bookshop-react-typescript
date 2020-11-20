import { PageInfo } from "./../../models/PageInfo";
import {
  BookActionTypes,
  FETCH_BOOK,
  FILTER_BOOKS,
  LOADING_BOOKS,
} from "./types";
import Book from "../../models/Book";
import BooksFilter from "../../models/BooksFilter";

export function fetchBook(book: Book): BookActionTypes {
  return {
    type: FETCH_BOOK,
    book: book,
  };
}

export function filterBooks(
  books: Book[],
  filter: BooksFilter,
  pageInfo: PageInfo
): BookActionTypes {
  return {
    type: FILTER_BOOKS,
    books: books,
    filter: filter,
    pageInfo: pageInfo,
  };
}

export function loadingBooks(loading: boolean): BookActionTypes {
  return {
    type: LOADING_BOOKS,
    loading: loading,
  };
}
