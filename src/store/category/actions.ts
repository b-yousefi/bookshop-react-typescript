import Category from "models/Category";
import { CategoryActionTypes, FETCH_CATEGORIES } from "./types";

export function fetchCategories(categories: Category[]): CategoryActionTypes {
  return {
    type: FETCH_CATEGORIES,
    categories: categories,
  };
}
