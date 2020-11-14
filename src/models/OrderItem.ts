import Book from "./Book";

class OrderItem {
  id?: string;
  book: Book;
  quantity: number;
  constructor(book: Book, quantity: number, id?: string) {
    this.id = id;
    this.book = book;
    this.quantity = quantity;
  }
}

export default OrderItem;
