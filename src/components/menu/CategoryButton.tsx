import { Grid } from "@material-ui/core";
import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Dispatch } from "redux";
import Category from "models/Category";
import { AppState } from "store";
import { thunkFetchCategories } from "store/category/thunk";
import { PopperButton } from "../UI/PopperButton";
import { CategoryMenuItem } from "./CategoryMenuItem";

export const CategoryButton = () => {
  const [popperOpen, setPopperOpen] = useState(false);

  const categories: readonly Category[] = useSelector(
    (state: AppState) => state.categories.tree,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const fetchedCategories = useCallback(
    () => dispatch(thunkFetchCategories()),
    [dispatch]
  );

  useEffect(() => {
    fetchedCategories();
  }, [dispatch, fetchedCategories]);

  const onCategoryItemClicked = () => {
    setPopperOpen(false);
  };

  const onOpenPopper = (open: boolean) => {
    setPopperOpen(open);
  };

  return (
    <PopperButton
      title="Categories"
      placement="bottom-start"
      open={popperOpen}
      onOpenPopper={onOpenPopper}
    >
      <div style={{ padding: 4 }}>
        <Grid container spacing={1}>
          {" "}
          {categories.map((category) => (
            <CategoryMenuItem
              key={category.id}
              category={category}
              onClick={onCategoryItemClicked}
            />
          ))}
        </Grid>
      </div>
    </PopperButton>
  );
};
