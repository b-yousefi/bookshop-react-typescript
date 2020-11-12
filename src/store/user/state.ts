import User from "../../models/User";

export interface UserState {
  user: User;
  token: string;
  isLoggedIn: boolean;
}
