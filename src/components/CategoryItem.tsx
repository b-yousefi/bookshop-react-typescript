import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";

import Category from "models/Category";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  const { category } = props;

  return (
    <ListItem
      button
      component={NavLink}
      to={{
        pathname: `/categories/${category.id}`,
        state: {
          categoryId: category.id,
        },
      }}
    >
      <ListItemText primary={category.name} />
    </ListItem>
  );
};
