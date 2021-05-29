import {
  AddressActionTypes,
  FETCH_ADDRESSES,
  SELECT_ADDRESS,
  ADD_ADDRESS,
  EDIT_ADDRESS,
  DELETE_ADDRESS,
} from "./types";
import Address from "models/Address";

export function fetchAddresses(addresses: Address[]): AddressActionTypes {
  return {
    type: FETCH_ADDRESSES,
    addresses: addresses,
  };
}

export function selectAddress(address: Address): AddressActionTypes {
  return {
    type: SELECT_ADDRESS,
    address: address,
  };
}

export function addAddress(address: Address): AddressActionTypes {
  return {
    type: ADD_ADDRESS,
    address: address,
  };
}

export function editAddress(address: Address): AddressActionTypes {
  return {
    type: EDIT_ADDRESS,
    address: address,
  };
}

export function deleteAddress(address: Address): AddressActionTypes {
  return {
    type: DELETE_ADDRESS,
    address: address,
  };
}
