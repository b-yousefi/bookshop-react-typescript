import axios from "axios";

import { fetchOrderDetails, fetchOrders } from "./actions";
import { AppThunk } from "../index";
import Order from "models/Order";
import { plainToClass } from "class-transformer";
import { PageInfo } from "models/PageInfo";

const ORDERS_PAGE_SIZE = 6;

export const thunkFetchOrders = (pagenumber: number): AppThunk => async (
  dispatch,
  getState
) => {
  const user = getState().user.user;
  let userId = user.id;
  const isLoggedIn = getState().user.isLoggedIn;
  if (userId === undefined && isLoggedIn && user._links) {
    userId = user._links.self.href.split("/").reverse()[0];
  }
  const url = `${process.env.REACT_APP_API_URL}/users/${userId}/orders?page=${
    pagenumber - 1
  }&size=${ORDERS_PAGE_SIZE}&sort=id,desc`;

  const response = await axios.get(url);
  let fetchedOrders: Order[] = plainToClass(
    Order,
    response.data._embedded.orders
  );

  let pageInfo: PageInfo = plainToClass(PageInfo, response.data.page as Object);
  pageInfo.pageNumber = response.data.page.number;

  dispatch(fetchOrders(fetchedOrders, pageInfo));
};

export const thunkFetchOrderDetails = (order: Order): AppThunk => async (
  dispatch
) => {
  if (order._links) {
    const response = await axios.get(order._links.self.href);
    let fetchedOrder: Order = plainToClass(Order, response.data as Order);

    dispatch(fetchOrderDetails(fetchedOrder));
  } else {
    throw new Error("Link to order does not exists!!!");
  }
};
