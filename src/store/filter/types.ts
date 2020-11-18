import { FilterItem } from "./../../models/FilterItem";
export const SET_AUTHOR_FILTER = "SET_AUTHOR_FILTER";
export const SET_PUBLICATION_FILTER = "SET_PUBLICATION_FILTER";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

interface SetAuthorFilter {
  type: typeof SET_AUTHOR_FILTER;
  selectedAuthors: FilterItem[];
}

interface SetPublicationFilter {
  type: typeof SET_PUBLICATION_FILTER;
  selectedPublications: FilterItem[];
}

interface SetCategoryFilter {
  type: typeof SET_CATEGORY_FILTER;
  selectedCategories: FilterItem[];
}

interface ClearFilter {
  type: typeof CLEAR_FILTER;
}

export type FilterActionTypes =
  | SetAuthorFilter
  | SetCategoryFilter
  | SetPublicationFilter
  | ClearFilter;
