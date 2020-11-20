import { FilterState } from "./state";
import {
  FilterActionTypes,
  SET_AUTHOR_FILTER,
  SET_CATEGORY_FILTER,
  SET_PUBLICATION_FILTER,
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
    case SET_AUTHOR_FILTER:
      return {
        ...state,
        bookFilter: {
          ...state.bookFilter,
          authors: action.selectedAuthors,
        },
      };
    case SET_CATEGORY_FILTER:
      return {
        ...state,
        bookFilter: {
          ...state.bookFilter,
          categories: action.selectedCategories,
        },
      };
    case SET_PUBLICATION_FILTER:
      return {
        ...state,
        bookFilter: {
          ...state.bookFilter,
          publications: action.selectedPublications,
        },
      };
    case CLEAR_FILTER:
      return initialState;
    default:
      return state;
  }
}
