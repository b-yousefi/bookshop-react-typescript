import { OrderActionTypes, FETCH_ORDERS, FETCH_ORDER_DETAILS } from "./types";
import Order from "../../models/Order";
import { PageInfo } from "./../../models/PageInfo";

export function fetchOrders(
  orders: Order[],
  pageInfo: PageInfo
): OrderActionTypes {
  return {
    type: FETCH_ORDERS,
    orders: orders,
    pageInfo: pageInfo,
  };
}

export function fetchOrderDetails(order: Order): OrderActionTypes {
  return {
    type: FETCH_ORDER_DETAILS,
    order: order,
  };
}
