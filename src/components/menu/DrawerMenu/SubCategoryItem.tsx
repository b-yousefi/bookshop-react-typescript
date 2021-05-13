import { ListItemText, ListItem } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import Category from "../../../models/Category";

interface SubCategoryItemProps {
  category: Category;
}

export const SubCategory: React.FC<SubCategoryItemProps> = (props) => {
  const { category } = props;

  return (
    <React.Fragment>
      {category &&
        category.subCategories.map((subCategory, i) => {
          return (
            <ListItem
              key={i}
              button
              component={NavLink}
              to={{
                pathname: `/categories/${subCategory.id}`,
                state: {
                  categoryId: subCategory.id,
                },
              }}
            >
              <ListItemText primary={subCategory.name} />
            </ListItem>
          );
        })}
    </React.Fragment>
  );
};
