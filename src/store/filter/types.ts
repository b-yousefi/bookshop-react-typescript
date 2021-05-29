import { FilterItem } from "models/FilterItem";
export const SET_AUTHORS_FILTER = "SET_AUTHORS_FILTER";
export const SET_PUBLICATIONS_FILTER = "SET_PUBLICATIONS_FILTER";
export const SET_CATEGORIES_FILTER = "SET_CATEGORIES_FILTER";
export const SELECT_AUTHOR = "SELECT_AUTHOR";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SELECT_PUBLICATION = "SELECT_PUBLICATION";
export const CLEAR_FILTER = "CLEAR_FILTER";

interface SelectAuthor {
  type: typeof SELECT_AUTHOR;
  selectedAuthor: FilterItem;
}

interface SelectPublication {
  type: typeof SELECT_PUBLICATION;
  selectedPublication: FilterItem;
}

interface SelectCategory {
  type: typeof SELECT_CATEGORY;
  selectedCategory: FilterItem;
}

interface SetAuthorsFilter {
  type: typeof SET_AUTHORS_FILTER;
  selectedAuthors: FilterItem[];
}

interface SetPublicationsFilter {
  type: typeof SET_PUBLICATIONS_FILTER;
  selectedPublications: FilterItem[];
}

interface SetCategoriesFilter {
  type: typeof SET_CATEGORIES_FILTER;
  selectedCategories: FilterItem[];
}

interface ClearFilter {
  type: typeof CLEAR_FILTER;
}

export type FilterActionTypes =
  | SetAuthorsFilter
  | SetCategoriesFilter
  | SetPublicationsFilter
  | ClearFilter
  | SelectAuthor
  | SelectCategory
  | SelectPublication;
