import { OrderState } from "./state";
import { OrderActionTypes, FETCH_ORDERS, FETCH_ORDER_DETAILS } from "./types";

const initialState: OrderState = {
  arr: [],
  pageInfo: { size: 0, totalElements: 0, totalPages: 0, pageNumber: 0 },
};

export function OrdersReducer(
  state: OrderState = initialState,
  action: OrderActionTypes
): OrderState {
  switch (action.type) {
    case FETCH_ORDERS:
      return { arr: action.orders, pageInfo: action.pageInfo };
    case FETCH_ORDER_DETAILS:
      const orderIndex = state.arr.findIndex(
        (order) => order.id === action.order.id
      );
      const ordrers = [...state.arr];
      ordrers[orderIndex] = action.order;
      return { ...state, arr: ordrers };
    default:
      return state;
  }
}
