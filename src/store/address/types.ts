import Address from "models/Address";

export const FETCH_ADDRESSES = "FETCH_ADDRESSES";
export const SELECT_ADDRESS = "SELECT_ADDRESS";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const EDIT_ADDRESS = "EDIT_ADDRESS";
export const DELETE_ADDRESS = "DELETE_ADDRESS";

interface FetchAddressesAction {
  type: typeof FETCH_ADDRESSES;
  addresses: Address[];
}

interface SelectAddressAction {
  type: typeof SELECT_ADDRESS;
  address: Address;
}

interface AddAddressAction {
  type: typeof ADD_ADDRESS;
  address: Address;
}

interface EditAddressAction {
  type: typeof EDIT_ADDRESS;
  address: Address;
}

interface DeleteAddressAction {
  type: typeof DELETE_ADDRESS;
  address: Address;
}

export type AddressActionTypes =
  | FetchAddressesAction
  | SelectAddressAction
  | AddAddressAction
  | EditAddressAction
  | DeleteAddressAction;
