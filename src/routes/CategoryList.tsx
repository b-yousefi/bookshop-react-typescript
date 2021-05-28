import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router";
import { AppState } from "store";
import {
  Paper,
  List,
  Typography,
  Breadcrumbs,
  Grid,
  ListSubheader,
} from "@material-ui/core";

import { Identifiable } from "models/Identifiable";
import { CategoryLink } from "components/UI/CategoryLink";
import { SearchPanel } from "components/filter/SearchPanel";
import { BookList } from "./BookList";
import { CategoryItem } from "components/CategoryItem";
import { selectCategory } from "store/filter/actions";

const CategoryList: React.FC<RouteComponentProps<Identifiable>> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const category = useSelector((state: AppState) =>
    state.categories.arr.find(
      (cat) => cat.id.toString() === props.match.params.id
    )
  );

  const setFilter = useCallback(async () => {
    if (category !== undefined) {
      await dispatch(selectCategory({ id: category.id, name: category.name }));
    }
  }, [dispatch, category]);

  useEffect(() => {
    setFilter();
  }, [setFilter]);

  if (category === undefined) {
    return <div>Nothing Found</div>;
  }

  const create_breadcrumbs = () => {
    let parentArr = category.parent.split("&");
    return (
      <Breadcrumbs aria-label="breadcrumb">
        {parentArr.slice(1).map((item) => {
          return <CategoryLink categoryId={item} key={item} />;
        })}
        <div />
      </Breadcrumbs>
    );
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3}>
        <Paper>
          {category.subCategories && category.subCategories.length > 0 && (
            <List component="nav">
              <ListSubheader>SubCategories</ListSubheader>
              {category.subCategories.map((subCategory) => (
                <CategoryItem key={subCategory.id} category={subCategory} />
              ))}
            </List>
          )}
          <SearchPanel
            showCategoryFilter={false}
            showAuthorFilter={true}
            showPublicationFilter={true}
          />
        </Paper>
      </Grid>

      <Grid item xs={12} md={9}>
        <Paper style={{ padding: 16 }}>
          {create_breadcrumbs()}
          <Typography variant="h4" gutterBottom>
            {category.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {category.description}
          </Typography>

          <BookList />
        </Paper>
      </Grid>
    </Grid>
  );
};

export const CategoryListPage = withRouter(CategoryList);
