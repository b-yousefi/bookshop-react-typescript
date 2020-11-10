import Author from "../../models/Author";

export const FETCH_AUTHORS = "FETCH_AUTHORS";
export const SELECT_AUTHOR = "SELECT_AUTHOR";

interface FetchAuthorsAction {
  type: typeof FETCH_AUTHORS;
  authors: Author[];
}

interface SelectAuthorAction {
  type: typeof SELECT_AUTHOR;
  author: Author;
}

export type AuthorActionTypes = FetchAuthorsAction | SelectAuthorAction;
