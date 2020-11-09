import moment from "moment";

class Author {
  id: string;
  fullName: string;
  birthday: Date;
  description: string;
  picture: string;

  constructor(
    id: string,
    fullName: string,
    birthday: Date,
    description: string,
    picture: string
  ) {
    this.id = id;
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
