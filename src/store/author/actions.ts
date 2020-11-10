import { AuthorActionTypes, FETCH_AUTHORS, SELECT_AUTHOR } from "./types";
import Author from "../../models/Author";

export function fetchAuthors(authors: Author[]): AuthorActionTypes {
  return {
    type: FETCH_AUTHORS,
    authors: authors,
  };
}

export function selectAuthor(author: Author): AuthorActionTypes {
  return {
    type: SELECT_AUTHOR,
    author: author,
  };
}
