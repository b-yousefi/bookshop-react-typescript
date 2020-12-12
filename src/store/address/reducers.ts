import { AddressState } from "./state";
import {
  AddressActionTypes,
  FETCH_ADDRESSES,
  SELECT_ADDRESS,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
} from "./types";

const initialState: AddressState = {
  arr: [],
};

export function AddressesReducer(
  state: AddressState = initialState,
  action: AddressActionTypes
): AddressState {
  switch (action.type) {
    case FETCH_ADDRESSES:
      return { arr: action.addresses };
    case ADD_ADDRESS:
      return { ...state, arr: state.arr.concat(action.address) };
    case EDIT_ADDRESS:
      const editedAddressIndex = state.arr.findIndex(
        (add) => add.id === action.address.id
      );
      const addrs = [...state.arr];
      addrs[editedAddressIndex] = action.address;
      return { ...state, arr: addrs };
    case DELETE_ADDRESS:
      const addressIndex = state.arr.findIndex(
        (add) => add.id === action.address.id
      );
      const updatedAddresses = [...state.arr];
      updatedAddresses.splice(addressIndex, 1);
      return { ...state, arr: updatedAddresses };
    case SELECT_ADDRESS:
    default:
      return state;
  }
}
