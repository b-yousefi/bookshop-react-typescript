import { FETCH_CATEGORIES, CategoryActionTypes } from "./types";
import { CategoryState } from "./state";
import Category from "models/Category";

const initialState: CategoryState = {
  arr: [],
  tree: [],
};

function flatten(categories: Category[], arr: Category[], parent: string) {
  categories.forEach((cat) => {
    cat.parent = parent;
    arr.push(cat);
    if (cat.subCategories) {
      flatten(cat.subCategories, arr, `${parent}&${cat.id}`);
    }
  });

  return arr;
}

export function CategoriesReducer(
  state = initialState,
  action: CategoryActionTypes
): CategoryState {
  switch (action.type) {
    case FETCH_CATEGORIES:
      const categoriesTree = action.categories;
      const arr: Category[] = [];
      flatten(categoriesTree, arr, "");
      return { tree: categoriesTree, arr };
    default:
      return state;
  }
}
