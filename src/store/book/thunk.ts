import axios from "axios";
import _ from "lodash";
import Book from "../../models/Book";
import { fetchBook, filterBooks, loadingBooks } from "./actions";
import { AppThunk } from "../index";
import { plainToClass } from "class-transformer";
import BooksFilter from "../../models/BooksFilter";

const BOOK_URL = `${process.env.REACT_APP_API_URL}/books`;

const PAGE_SIZE = 8;

export const thunkFetchBook = (bookId: string): AppThunk => async (
  dispatch
) => {
  const url = `${BOOK_URL}/${bookId}`;
  const response = await axios.get(url);
  let fetchedBook: Book = plainToClass(Book, response.data as Object);
  dispatch(fetchBook(fetchedBook));
};

export const thunkFilterBooks = (filter: BooksFilter): AppThunk => async (
  dispatch,
  getState
) => {
  let refresh = getState().books.currentFilter.doRefresh;

  if (!refresh) {
    const booksFilter = getState().books.currentFilter;
    if (
      !booksFilter ||
      !_.isEqual(filter.publicationIds, booksFilter.publicationIds) ||
      !_.isEqual(filter.categoryIds, booksFilter.categoryIds) ||
      !_.isEqual(filter.authorIds, booksFilter.authorIds)
    ) {
      refresh = true;
    }
  }

  if (!refresh) {
    //do nothing data is up to date
    return;
  }
  dispatch(loadingBooks(true));
  dispatch(thunkFilterBooksByPage(1));
};

export const thunkFilterBooksByPage = (page: number): AppThunk => async (
  dispatch,
  getState
) => {
  const filter = getState().books.currentFilter;
  const url =
    `${BOOK_URL}/filter?publicationIds=${filter.publicationIds.map((f) => f)}` +
    `&categoryIds=${filter.categoryIds.map((f) => f)}` +
    `&authorIds=${filter.authorIds.map((f) => f)}` +
    `&page=${page - 1}&size=${PAGE_SIZE}`;
  const response = await axios.get(url);

  let fetchedBooks: Book[] = plainToClass(Book, response.data._embedded.books);
  dispatch(filterBooks(fetchedBooks, Object.assign({}, filter)));
};

export const fetchBooks = (): AppThunk => async (dispatch) => {
  dispatch(thunkFilterBooks(new BooksFilter()));
};
