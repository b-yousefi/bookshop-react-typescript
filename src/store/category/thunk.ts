import axios from "axios";

import { fetchCategories } from "./actions";
import { AppThunk } from "../index";
import Category from "models/Category";
import { plainToClass } from "class-transformer";

const Categories_URL = `${process.env.REACT_APP_API_URL}/categories`;

export const thunkFetchCategories = (): AppThunk => async (dispatch) => {
  const url = `${Categories_URL}/allcategories`;
  const response = await axios.get(url);
  let fetchedCategories: Category[] = plainToClass(
    Category,
    response.data._embedded.categories
  );

  dispatch(fetchCategories(fetchedCategories));
};
