import { FilterState } from "./state";
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

const initialState: FilterState = {
  bookFilter: {
    authors: [],
    categories: [],
    publications: [],
    doRefresh: true,
  },
};

export function FilterReducer(
  state: FilterState = initialState,
  action: FilterActionTypes
): FilterState {
  switch (action.type) {
    case SET_AUTHORS_FILTER:
      return {
        ...state,
        bookFilter: {
          ...state.bookFilter,
          authors: action.selectedAuthors,
          doRefresh: false,
        },
      };
    case SET_CATEGORIES_FILTER:
      return {
        ...state,
        bookFilter: {
          ...state.bookFilter,
          categories: action.selectedCategories,
          doRefresh: false,
        },
      };
    case SET_PUBLICATIONS_FILTER:
      return {
        ...state,
        bookFilter: {
          ...state.bookFilter,
          publications: action.selectedPublications,
          doRefresh: false,
        },
      };
    case SELECT_AUTHOR:
      return {
        ...state,
        bookFilter: {
          publications: [],
          categories: [],
          authors: [action.selectedAuthor],
          doRefresh: false,
        },
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        bookFilter: {
          publications: [],
          categories: [action.selectedCategory],
          authors: [],
          doRefresh: false,
        },
      };
    case SELECT_PUBLICATION:
      return {
        ...state,
        bookFilter: {
          publications: [action.selectedPublication],
          categories: [],
          authors: [],
          doRefresh: false,
        },
      };
    case CLEAR_FILTER:
      return initialState;
    default:
      return state;
  }
}
