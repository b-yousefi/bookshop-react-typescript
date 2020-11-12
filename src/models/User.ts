class User {
  id?: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string,
    id?: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}

export default User;
