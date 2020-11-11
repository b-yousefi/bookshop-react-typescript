import { FETCH_PUBLICATIONS, PublicationActionTypes } from "./types";
import { PublicationState } from "./state";

const initialState: PublicationState = {
  arr: [],
};

export function PublicationsReducer(
  state = initialState,
  action: PublicationActionTypes
): PublicationState {
  switch (action.type) {
    case FETCH_PUBLICATIONS:
      return { arr: action.publications };
    default:
      return state;
  }
}
