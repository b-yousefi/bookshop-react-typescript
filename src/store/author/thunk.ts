import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { fetchAuthors } from "./actions";
import { RootState } from "../index";
import Author from "../../models/Author";
import { plainToClass } from "class-transformer";

const Author_URL = `${process.env.REACT_APP_API_URL}/authors`;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const thunkFetchAuthors = (): AppThunk<void> => async (dispatch) => {
  const response = await axios.get(Author_URL);
  let fetchedAuthors: Author[] = plainToClass(
    Author,
    response.data._embedded.authors
  );

  dispatch(fetchAuthors(fetchedAuthors));
};
