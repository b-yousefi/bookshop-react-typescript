import React from "react";
import { NavLink } from "react-router-dom";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from "@material-ui/core";
import Category from "models/Category";

interface CategoryMenuItemProps {
  category: Category;
  onClick: () => void;
}

export const CategoryMenuItem: React.FC<CategoryMenuItemProps> = (props) => {
  const { category, onClick } = props;
  const createSubCategory = (subCategory: Category) => {
    return (
      <ListItem
        key={subCategory.id}
        button
        component={NavLink}
        to={{
          pathname: `/categories/${subCategory.id}`,
          state: {
            categoryId: subCategory.id,
          },
        }}
        onClick={onClick}
      >
        <ListItemText primary={subCategory.name} />
      </ListItem>
    );
  };

  return (
    <Grid key={category.id} item xs>
      <Paper elevation={0}>
        <List
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component={NavLink}
              to={{ pathname: `/categories/${category.id}` }}
              style={{ textDecoration: "none" }}
              id="nested-list-subheader"
              onClick={onClick}
            >
              {category.name}
            </ListSubheader>
          }
        >
          <Divider />
          {category.subCategories.map((subCategory) =>
            createSubCategory(subCategory)
          )}
        </List>
      </Paper>
    </Grid>
  );
};
