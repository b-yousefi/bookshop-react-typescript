import axios from "axios";

import {
  fetchAddresses,
  addAddress,
  editAddress,
  deleteAddress,
} from "./actions";
import { AppThunk } from "../index";
import Address from "../../models/Address";
import { plainToClass } from "class-transformer";

const Address_URL = `${process.env.REACT_APP_API_URL}/addresses`;

export const thunkFetchAddresses = (): AppThunk => async (
  dispatch,
  getState
) => {
  const username = getState().user.user.username;
  const url = `${Address_URL}/search/findAllByUser_username?username=${username}`;
  const response = await axios.get(url);
  let fetchedAddresses: Address[] = plainToClass(
    Address,
    response.data._embedded.addresses
  );

  dispatch(fetchAddresses(fetchedAddresses));
};

export const thunkAddAddress = (address: Address): AppThunk => async (
  dispatch,
  getState
) => {
  const userLink = getState().user.user._links!.self.href;
  const newAddress = { ...address, user: userLink };
  const response = await axios.post(Address_URL, JSON.stringify(newAddress));
  let addedAddress: Address = plainToClass(Address, response.data as Object);
  dispatch(addAddress(addedAddress));
};

export const thunkEditAddress = (address: Address): AppThunk => async (
  dispatch,
  getState
) => {
  const url = `${Address_URL}/${address.id}`;

  const userLink = getState().user.user._links!.self.href;
  const addrs = { ...address, user: userLink };

  const response = await axios.patch(url, JSON.stringify(addrs));
  let updatedAddress: Address = plainToClass(Address, response.data as Object);
  dispatch(editAddress(updatedAddress));
};

export const thunkDeleteAddress = (address: Address): AppThunk => async (
  dispatch
) => {
  const url = `${Address_URL}/${address.id}`;
  await axios.delete(url);
  dispatch(deleteAddress(address));
};
