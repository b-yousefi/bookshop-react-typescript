import axios from "axios";
import { plainToClass } from "class-transformer";
import Address from "models/Address";
import Book from "models/Book";
import Order from "models/Order";
import OrderItem from "models/OrderItem";

import { AppThunk } from "./../index";
import {
  fetchShoppingCart,
  deleteFromShoppingCart,
  updateShoppingCart,
  addToShoppingCart,
  closeShoppingCart,
} from "./actions";

const USER_URL = `${process.env.REACT_APP_API_URL}/users`;

export const thunkFetchShoppingCart = (): AppThunk => async (
  dispatch,
  getState
) => {
  const userId = getState().user.user.id;
  const url = `${USER_URL}/${userId}/shopping_cart`;
  const response = await axios.get(url);
  let fetchedCart: Order = plainToClass(Order, response.data as Object);
  dispatch(fetchShoppingCart(fetchedCart));
};

export const thunkUpdateShoppingCart = (
  book: Book,
  quantity: number
): AppThunk => async (dispatch, getState) => {
  const orderItemId = getState().shoppingCart.cart.orderItems.find(
    (item) => item.book.id === book.id
  )?.id;
  const orderItem = new OrderItem(book, quantity);
  if (!orderItemId) {
    dispatch(thunkAddItemToShoppingCart(orderItem));
  } else {
    orderItem.id = orderItemId;
    if (quantity === 0) {
      dispatch(thunkDeleteItemFromShoppingCart(orderItem));
    } else {
      dispatch(thunkUpdateOrderItemInShoppingCart(orderItem));
    }
  }
};

const thunkUpdateOrderItemInShoppingCart = (
  orderItem: OrderItem
): AppThunk => async (dispatch, getState) => {
  const orderId = getState().shoppingCart.cart.id;
  const userId = getState().user.user.id;
  const url = `${USER_URL}/${userId}/orders/${orderId}/order_items/${orderItem.id}`;

  const response = await axios.patch(
    url,
    JSON.stringify({ ...orderItem, book: orderItem.book._links.self.href })
  );
  let updatededOrderItem: OrderItem = plainToClass(
    OrderItem,
    response.data as Object
  );
  dispatch(updateShoppingCart(updatededOrderItem));
};

const thunkAddItemToShoppingCart = (orderItem: OrderItem): AppThunk => async (
  dispatch,
  getState
) => {
  const orderId = getState().shoppingCart.cart.id;
  const userId = getState().user.user.id;
  const url = `${USER_URL}/${userId}/orders/${orderId}/order_items`;
  const response = await axios.post(
    url,
    JSON.stringify({ ...orderItem, book: orderItem.book._links.self.href })
  );
  let addedOrderItem: OrderItem = plainToClass(
    OrderItem,
    response.data as Object
  );
  dispatch(addToShoppingCart(addedOrderItem));
};

const thunkDeleteItemFromShoppingCart = (
  orderItem: OrderItem
): AppThunk => async (dispatch, getState) => {
  const orderId = getState().shoppingCart.cart.id;
  const userId = getState().user.user.id;
  const url = `${USER_URL}/${userId}/orders/${orderId}/order_items/${orderItem.id}`;

  axios.delete(url);
  dispatch(deleteFromShoppingCart(orderItem));
};

export const thunkCloseShoppingCart = (toAddress: Address): AppThunk => async (
  dispatch,
  getState
) => {
  const userId = getState().user.user.id;
  const shoppingCartId = getState().shoppingCart.cart.id;
  const url = `${USER_URL}/${userId}/orders/${shoppingCartId}/close`;
  await axios.post(
    url,
    JSON.stringify({ address: toAddress._links.self.href })
  );

  dispatch(closeShoppingCart());
};
