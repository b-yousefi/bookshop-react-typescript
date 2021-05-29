import axios from "axios";

import { fetchAuthors } from "./actions";
import { AppThunk } from "../index";
import Author from "models/Author";
import { plainToClass } from "class-transformer";

const Author_URL = `${process.env.REACT_APP_API_URL}/authors`;

export const thunkFetchAuthors = (): AppThunk => async (dispatch) => {
  const response = await axios.get(Author_URL);
  let fetchedAuthors: Author[] = plainToClass(
    Author,
    response.data._embedded.authors
  );

  dispatch(fetchAuthors(fetchedAuthors));
};
