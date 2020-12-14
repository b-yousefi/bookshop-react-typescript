import Order from "../../models/Order";
import OrderItem from "../../models/OrderItem";
import OrderStatus from "../../models/OrderStatus";
import { ShoppingCartState } from "./state";
import {
  FETCH_SHOPPING_CART,
  UPDATE_SHOPPING_CART,
  ADD_SHOPPING_CART,
  CLEAR_SHOPPING_CART,
  DELETE_SHOPPING_CART,
  CLOSE_SHOPPING_CART,
  ShoppingCartActionsType,
} from "./types";

const initialState: ShoppingCartState = {
  cart: new Order(
    "0",
    0,
    "init",
    new Date(),
    [],
    new OrderStatus("OPEN", new Date().toISOString())
  ),
};

export function ShoppingCartReducer(
  state: ShoppingCartState = initialState,
  action: ShoppingCartActionsType
): ShoppingCartState {
  switch (action.type) {
    case FETCH_SHOPPING_CART:
      return { cart: action.cart };
    case ADD_SHOPPING_CART: {
      const updatedOrderItems = [...state.cart.orderItems];
      updatedOrderItems.push(action.orderItem);
      const updatedCart = { ...state.cart };
      updatedCart.orderItems = updatedOrderItems;
      const totalPrice = computeTotalPrice(updatedOrderItems);
      updatedCart.totalPrice = totalPrice;
      return { ...state, ...updatedCart };
    }
    case UPDATE_SHOPPING_CART: {
      const updatedOrderItems = [...state.cart.orderItems];
      const orderItemIndex = state.cart.orderItems.findIndex(
        (orderItem) => orderItem.id === action.orderItem.id
      );
      updatedOrderItems[orderItemIndex] = action.orderItem;
      const updatedCart = { ...state.cart };
      updatedCart.orderItems = updatedOrderItems;
      const totalPrice = computeTotalPrice(updatedOrderItems);
      updatedCart.totalPrice = totalPrice;
      return { ...state, ...updatedCart };
    }
    case DELETE_SHOPPING_CART: {
      const deletedOrderItem = action.orderItem;
      const orderItemIndex = state.cart.orderItems.findIndex(
        (orderItem) => orderItem.id === deletedOrderItem.id
      );
      const updatedOrderItems = [...state.cart.orderItems];
      updatedOrderItems.splice(orderItemIndex);
      const totalPrice = computeTotalPrice(updatedOrderItems);
      const updatedCart = { ...state.cart };
      updatedCart.orderItems = updatedOrderItems;
      updatedCart.totalPrice = totalPrice;
      return { ...state, ...updatedCart };
    }
    case CLOSE_SHOPPING_CART:
    case CLEAR_SHOPPING_CART:
      return initialState;
    default:
      return state;
  }
}

function computeTotalPrice(orderItems: OrderItem[]) {
  let totalPrice = 0;
  orderItems.forEach((orderItem, key) => {
    totalPrice += orderItem.quantity * orderItem.book.price;
  });
  return totalPrice;
}
