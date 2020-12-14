import moment from "moment";
import DbFile from "./DbFile";
import { Links } from "./Links";

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
  _links: Links;
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
    quantity: number,
    _links: Links
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
    this._links = _links;
  }

  get readablePublishedDay() {
    return this.publishedDay
      ? moment(this.publishedDay).format("MMMM Do YYYY")
      : undefined;
  }
}

export default Book;
