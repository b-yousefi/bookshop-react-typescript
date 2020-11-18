import { FilterItem } from "../../models/FilterItem";
import {
  FilterActionTypes,
  SET_AUTHOR_FILTER,
  SET_CATEGORY_FILTER,
  SET_PUBLICATION_FILTER,
  CLEAR_FILTER,
} from "./types";

export function setAuthorFilter(
  selectedAuthors: FilterItem[]
): FilterActionTypes {
  return {
    type: SET_AUTHOR_FILTER,
    selectedAuthors: selectedAuthors,
  };
}

export function setCategoryFilter(
  selectedCategories: FilterItem[]
): FilterActionTypes {
  return {
    type: SET_CATEGORY_FILTER,
    selectedCategories: selectedCategories,
  };
}

export function setPublicationFilter(
  selectedPublications: FilterItem[]
): FilterActionTypes {
  return {
    type: SET_PUBLICATION_FILTER,
    selectedPublications: selectedPublications,
  };
}

export function clearFilter(): FilterActionTypes {
  return {
    type: CLEAR_FILTER,
  };
}
