import Category from "models/Category";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

interface FetchCategories {
  type: typeof FETCH_CATEGORIES;
  categories: Category[];
}

export type CategoryActionTypes = FetchCategories;
