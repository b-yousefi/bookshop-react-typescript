export default class OrderStatus {
  status: string;
  updatedAt: string;
  constructor(status: string, updatedAt: string) {
    this.status = status;
    this.updatedAt = updatedAt;
  }
}
