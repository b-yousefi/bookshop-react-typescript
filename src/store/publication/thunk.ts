import axios from "axios";

import { fetchPublications } from "./actions";
import { AppThunk } from "../index";
import Publication from "models/Publication";
import { plainToClass } from "class-transformer";

const Publications_URL = `${process.env.REACT_APP_API_URL}/publications`;

export const thunkFetchPublications = (): AppThunk => async (dispatch) => {
  const response = await axios.get(Publications_URL);
  let fetchedPublications: Publication[] = plainToClass(
    Publication,
    response.data._embedded.publications
  );

  dispatch(fetchPublications(fetchedPublications));
};
