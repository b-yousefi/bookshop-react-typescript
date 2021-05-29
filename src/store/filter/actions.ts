import { FilterItem } from "models/FilterItem";
import {
  FilterActionTypes,
  SET_AUTHORS_FILTER,
  SET_CATEGORIES_FILTER,
  SET_PUBLICATIONS_FILTER,
  SELECT_AUTHOR,
  SELECT_CATEGORY,
  SELECT_PUBLICATION,
  CLEAR_FILTER,
} from "./types";

export function setAuthorsFilter(
  selectedAuthors: FilterItem[]
): FilterActionTypes {
  return {
    type: SET_AUTHORS_FILTER,
    selectedAuthors: selectedAuthors,
  };
}

export function selectAuthor(selectedAuthor: FilterItem): FilterActionTypes {
  return {
    type: SELECT_AUTHOR,
    selectedAuthor: selectedAuthor,
  };
}

export function setCategoriesFilter(
  selectedCategories: FilterItem[]
): FilterActionTypes {
  return {
    type: SET_CATEGORIES_FILTER,
    selectedCategories: selectedCategories,
  };
}

export function selectCategory(
  selectedCategory: FilterItem
): FilterActionTypes {
  return {
    type: SELECT_CATEGORY,
    selectedCategory: selectedCategory,
  };
}

export function setPublicationsFilter(
  selectedPublications: FilterItem[]
): FilterActionTypes {
  return {
    type: SET_PUBLICATIONS_FILTER,
    selectedPublications: selectedPublications,
  };
}

export function selectPublication(
  selectedPublication: FilterItem
): FilterActionTypes {
  return {
    type: SELECT_PUBLICATION,
    selectedPublication: selectedPublication,
  };
}

export function clearFilter(): FilterActionTypes {
  return {
    type: CLEAR_FILTER,
  };
}
