import moment from "moment";
import { Entity } from "./Entity";
import { Links } from "./Links";

class Author extends Entity {
  fullName: string;
  birthday: Date;
  description: string;
  picture: string;

  constructor(
    fullName: string,
    birthday: Date,
    description: string,
    picture: string,
    _links: Links
  ) {
    super(_links);
    this.fullName = fullName;
    this.birthday = birthday;
    this.description = description;
    this.picture = picture;
  }

  get readableBirthdayDate() {
    return moment(this.birthday).format("MMMM Do YYYY");
  }
}

export default Author;
