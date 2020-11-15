import axios from "axios";
import { plainToClass } from "class-transformer";
import Book from "../../models/Book";
import Order from "../../models/Order";
import OrderItem from "../../models/OrderItem";

import { AppThunk } from "./../index";
import {
  fetchShoppingCart,
  deleteFromShoppingCart,
  updateShoppingCart,
  addToShoppingCart,
} from "./actions";

const USER_URL = `${process.env.REACT_APP_API_URL}/users`;

export const thunkFetchShoppingCart = (): AppThunk => async (
  dispatch,
  getState
) => {
  const userId = getState().user.user.id;
  // const url = `${USER_URL}/${userId}/shopping_cart`;
  const username = getState().user.user.username;
  const url = `${USER_URL}/get_shopping_cart?username=${username}`;
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

  const response = await axios.patch(url, JSON.stringify(orderItem));
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
  const response = await axios.post(url, JSON.stringify(orderItem));
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
