import { PageInfo } from "models/PageInfo";
import axios from "axios";
import _ from "lodash";
import Book from "models/Book";
import { fetchBook, filterBooks, loadingBooks } from "./actions";
import { AppThunk } from "../index";
import { plainToClass } from "class-transformer";
import BooksFilter from "models/BooksFilter";

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
  dispatch
) => {
  dispatch(thunkFilterBooksByPage(filter, 1));
};

function shouldRefresh(filter: BooksFilter, currentFilter: BooksFilter) {
  if (
    !currentFilter ||
    !_.isEqual(filter.publications, currentFilter.publications) ||
    !_.isEqual(filter.categories, currentFilter.categories) ||
    !_.isEqual(filter.authors, currentFilter.authors)
  ) {
    return true;
  } else {
    return false;
  }
}

export const thunkFilterBooksByPage = (
  filter: BooksFilter,
  page: number
): AppThunk => async (dispatch, getState) => {
  let refresh = filter.doRefresh;

  if (!refresh) {
    const booksFilter = getState().books.currentFilter;
    refresh = shouldRefresh(filter, booksFilter);
  }

  if (!refresh) {
    //do nothing data is up to date
    return;
  }

  dispatch(loadingBooks(true));
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
