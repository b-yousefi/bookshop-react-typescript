import { PageInfo } from "./../../models/PageInfo";
import axios from "axios";
import _ from "lodash";
import Book from "../../models/Book";
import { fetchBook, filterBooks, loadingBooks } from "./actions";
import { AppThunk } from "../index";
import { plainToClass } from "class-transformer";

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

export const thunkFilterBooks = (): AppThunk => async (dispatch, getState) => {
  let refresh = getState().books.currentFilter.doRefresh;
  let filter = getState().filter.bookFilter;
  if (!refresh) {
    const booksFilter = getState().books.currentFilter;
    if (
      !booksFilter ||
      !_.isEqual(filter.publications, booksFilter.publications) ||
      !_.isEqual(filter.categories, booksFilter.categories) ||
      !_.isEqual(filter.authors, booksFilter.authors)
    ) {
      refresh = true;
    }
  }

  if (!refresh) {
    //do nothing data is up to date
    return;
  }
  dispatch(thunkFilterBooksByPage(1));
};

export const thunkFilterBooksByPage = (page: number): AppThunk => async (
  dispatch,
  getState
) => {
  dispatch(loadingBooks(true));
  const filter = getState().filter.bookFilter;
  const url =
    `${BOOK_URL}/filter?publicationIds=${filter.publications.map(
      (f) => f.id
    )}` +
    `&categoryIds=${filter.categories.map((f) => f.id)}` +
    `&authorIds=${filter.authors.map((f) => f.id)}` +
    `&page=${page - 1}&size=${PAGE_SIZE}`;
  const response = await axios.get(url);
  let fetchedBooks: Book[] = [];
  if (response.data._embedded) {
    fetchedBooks = plainToClass(Book, response.data._embedded.books);
  }
  let pageInfo: PageInfo = plainToClass(PageInfo, response.data.page as Object);
  pageInfo.pageNumber = response.data.page.number;
  dispatch(filterBooks(fetchedBooks, Object.assign({}, filter), pageInfo));
  dispatch(loadingBooks(false));
};

export const fetchBooks = (): AppThunk => async (dispatch) => {
  dispatch(thunkFilterBooks());
};
