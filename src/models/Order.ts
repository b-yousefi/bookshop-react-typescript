import moment from "moment";
import OrderItem from "./OrderItem";
import { Links } from "./Links";
import OrderStatus from "./OrderStatus";

class Order {
  id: string;
  totalPrice: number;
  status: string;
  updatedAt: Date;
  orderItems: OrderItem[];
  currentStatus: OrderStatus;
  _links?: Links;
  constructor(
    id: string,
    totalPrice: number,
    status: string,
    updatedAt: Date,
    orderItems: OrderItem[],
    currentStatus: OrderStatus,
    _links?: Links
  ) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.status = status;
    this.updatedAt = updatedAt;
    this.orderItems = orderItems;
    this.currentStatus = currentStatus;
    if (_links) this._links = _links;
  }

  get readableUpdatedAt() {
    return this.updatedAt
      ? moment(this.updatedAt).format("MMMM Do YYYY")
      : undefined;
  }
}

export default Order;
