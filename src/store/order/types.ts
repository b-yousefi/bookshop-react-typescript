import Order from "models/Order";
import { PageInfo } from "models/PageInfo";

export const FETCH_ORDERS = "FETCH_ORDERS";
export const FETCH_ORDER_DETAILS = "FETCH_ORDER_DETAILS";

interface FetchOrdersAction {
  type: typeof FETCH_ORDERS;
  orders: Order[];
  pageInfo: PageInfo;
}

interface FetchOrderDetailsAction {
  type: typeof FETCH_ORDER_DETAILS;
  order: Order;
}

export type OrderActionTypes = FetchOrdersAction | FetchOrderDetailsAction;
