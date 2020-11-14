import Order from "../../models/Order";
import OrderItem from "../../models/OrderItem";
import {
  ShoppingCartActionsType,
  FETCH_SHOPPING_CART,
  UPDATE_SHOPPING_CART,
  ADD_SHOPPING_CART,
  DELETE_SHOPPING_CART,
  CLEAR_SHOPPING_CART,
} from "./types";

export function fetchShoppingCart(order: Order): ShoppingCartActionsType {
  return {
    type: FETCH_SHOPPING_CART,
    cart: order,
  };
}

export function updateShoppingCart(
  orderItem: OrderItem
): ShoppingCartActionsType {
  return {
    type: UPDATE_SHOPPING_CART,
    orderItem: orderItem,
  };
}

export function addToShoppingCart(
  orderItem: OrderItem
): ShoppingCartActionsType {
  return {
    type: ADD_SHOPPING_CART,
    orderItem: orderItem,
  };
}

export function deleteFromShoppingCart(
  orderItem: OrderItem
): ShoppingCartActionsType {
  return {
    type: DELETE_SHOPPING_CART,
    orderItem: orderItem,
  };
}

export function clearShoppingCart(): ShoppingCartActionsType {
  return {
    type: CLEAR_SHOPPING_CART,
  };
}
