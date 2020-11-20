import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ListItem } from "@material-ui/core";

import { CheckBoxTag } from "./CheckBoxTag";
import { FilterItem } from "../../models/FilterItem";
import { AppState } from "../../store";
import { setCategoryFilter } from "../../store/filter/actions";

interface CategoriesFilterProps {
  selectedCategories?: FilterItem[];
  onFilterChanged: () => void;
}

export const CategoriesFilter: React.FC<CategoriesFilterProps> = (props) => {
  const filteredCategories = useSelector(
    (state: AppState) => state.filter.bookFilter.categories
  );

  const categoryFilterItems: FilterItem[] = useSelector(
    (state: AppState) => state.categories.arr
  ).map((category) => {
    return { id: category.id, name: category.name };
  });

  const dipatch: Dispatch<any> = useDispatch();

  const onChange = (newValue: FilterItem[]) => {
    dipatch(setCategoryFilter(newValue));
    props.onFilterChanged();
  };

  return (
    <ListItem>
      <CheckBoxTag
        width="100%"
        name="authorsFilter"
        value={filteredCategories}
        onChange={onChange}
        options={categoryFilterItems}
        label="categories"
        placeholder="category"
      />
    </ListItem>
  );
};
