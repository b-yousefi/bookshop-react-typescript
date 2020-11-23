import moment from "moment";
import DbFile from "./DbFile";

class Book {
  id: number;
  name: string;
  publishedDay: Date;
  authorIds: number[];
  publicationId: number;
  ISBN: string;
  summary: string;
  categoryIds: string[];
  picture: DbFile;
  price: number;
  quantity: number;
  constructor(
    id: number,
    name: string,
    publishedDay: Date,
    authorIds: number[],
    publicationId: number,
    ISBN: string,
    summary: string,
    categoryIds: string[],
    picture: DbFile,
    price: number,
    quantity: number
  ) {
    this.id = id;
    this.name = name;
    this.publishedDay = publishedDay;
    this.authorIds = authorIds;
    this.publicationId = publicationId;
    this.ISBN = ISBN;
    this.summary = summary;
    this.categoryIds = categoryIds;
    this.picture = picture;
    this.price = price;
    this.quantity = quantity;
  }

  get readablePublishedDay() {
    return this.publishedDay
      ? moment(this.publishedDay).format("MMMM Do YYYY")
      : undefined;
  }
}

export default Book;
