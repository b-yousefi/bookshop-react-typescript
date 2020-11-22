import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ListItem } from "@material-ui/core";

import { CheckBoxTag } from "./CheckBoxTag";
import { FilterItem } from "../../models/FilterItem";
import { AppState } from "../../store";
import { setPublicationsFilter } from "../../store/filter/actions";

interface PublicationsFilterProps {
  selectedPublications?: FilterItem[];
}

export const PublicationsFilter: React.FC<PublicationsFilterProps> = (
  props
) => {
  const filteredPublications = useSelector(
    (state: AppState) => state.filter.bookFilter.publications
  );

  const publicationFilterItems: FilterItem[] = useSelector(
    (state: AppState) => state.publications.arr
  ).map((category) => {
    return { id: category.id, name: category.name };
  });

  const dipatch: Dispatch<any> = useDispatch();

  const onChange = (newValue: FilterItem[]) => {
    dipatch(setPublicationsFilter(newValue));
  };

  return (
    <ListItem>
      <CheckBoxTag
        width="100%"
        name="authorsFilter"
        value={filteredPublications}
        onChange={onChange}
        options={publicationFilterItems}
        label="publications"
        placeholder="publication"
      />
    </ListItem>
  );
};
