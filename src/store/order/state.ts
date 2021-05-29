import Order from "models/Order";
import { PageInfo } from "models/PageInfo";

export interface OrderState {
  arr: Order[];
  pageInfo: PageInfo;
}
