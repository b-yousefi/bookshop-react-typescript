import { Links } from "./Links";

class User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  _links?: Links;
  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string,
    _links?: Links
  ) {
    this._links = _links;
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }

  get id(): string {
    return this._links ? this._links.self.href.split("/").reverse()[0] : "";
  }
}

export default User;
