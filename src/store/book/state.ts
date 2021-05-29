import { PageInfo } from "models/PageInfo";
import Book from "models/Book";
import BooksFilter from "models/BooksFilter";

export interface BookState {
  arr: Book[];
  currentFilter: BooksFilter;
  selectedBook: Book;
  loading: boolean;
  pageInfo: PageInfo;
}
