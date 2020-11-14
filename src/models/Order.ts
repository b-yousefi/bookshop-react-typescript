import moment from "moment";
import OrderItem from "./OrderItem";

class Order {
  id: string;
  totalPrice: number;
  status: string;
  updatedAt: Date;
  items: OrderItem[];
  constructor(
    id: string,
    totalPrice: number,
    status: string,
    updatedAt: Date,
    items: OrderItem[]
  ) {
    this.id = id;
    this.totalPrice = totalPrice;
    this.status = status;
    this.updatedAt = updatedAt;
    this.items = items;
  }

  get readableUpdatedAt() {
    return this.updatedAt
      ? moment(this.updatedAt).format("MMMM Do YYYY")
      : undefined;
  }
}

export default Order;
