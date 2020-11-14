import Order from "../../models/Order";
import OrderItem from "../../models/OrderItem";

export const FETCH_SHOPPING_CART = "FETCH_SHOPPING_CART";
export const CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART";
export const UPDATE_SHOPPING_CART = "UPDATE_SHOPPING_CART";
export const ADD_SHOPPING_CART = "ADD_SHOPPING_CART";
export const DELETE_SHOPPING_CART = "DELETE_SHOPPING_CART";

interface FetchShoppingCart {
  type: typeof FETCH_SHOPPING_CART;
  cart: Order;
}

interface ClearShoppingCart {
  type: typeof CLEAR_SHOPPING_CART;
}

interface UpdateShoppingCart {
  type: typeof UPDATE_SHOPPING_CART;
  orderItem: OrderItem;
}

interface AddShoppingCart {
  type: typeof ADD_SHOPPING_CART;
  orderItem: OrderItem;
}

interface DeleteShoppingCart {
  type: typeof DELETE_SHOPPING_CART;
  orderItem: OrderItem;
}

export type ShoppingCartActionsType =
  | FetchShoppingCart
  | ClearShoppingCart
  | UpdateShoppingCart
  | AddShoppingCart
  | DeleteShoppingCart;
