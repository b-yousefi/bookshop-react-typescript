import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ListItem } from "@material-ui/core";

import { CheckBoxTag } from "./CheckBoxTag";
import { FilterItem } from "../../models/FilterItem";
import { AppState } from "../../store";
import { setAuthorFilter } from "../../store/filter/actions";

interface AuthorsFilterProps {
  selectedAuthors?: FilterItem[];
}

export const AuthorsFilter: React.FC<AuthorsFilterProps> = (props) => {
  const filteredAuthors = useSelector(
    (state: AppState) => state.filter.bookFilter.authors
  );

  const authorFilterItems: FilterItem[] = useSelector(
    (state: AppState) => state.authors.arr
  ).map((author) => {
    return { id: author.id, name: author.fullName };
  });

  const dipatch: Dispatch<any> = useDispatch();

  const onChange = (newValue: FilterItem[]) => {
    dipatch(setAuthorFilter(newValue));
    // this.props.setFilter(this.state.filter);
    // this.props.filterBooks();
  };

  return (
    <ListItem>
      <CheckBoxTag
        width="100%"
        name="authorsFilter"
        value={filteredAuthors}
        onChange={onChange}
        options={authorFilterItems}
        label="authors"
        placeholder="author"
      />
    </ListItem>
  );
};
