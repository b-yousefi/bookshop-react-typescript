import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import { NavLink } from "react-router-dom";
import Category from "../../../models/Category";
import { SubCategory } from "./SubCategoryItem";

interface CategoryItemProps {
  category: Category;
  isSelected: boolean;
  handleClickCategoryItem: (id: string) => (event: React.MouseEvent) => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  const { category, isSelected, handleClickCategoryItem } = props;

  return (
    <div key={category.name}>
      <ListItem
        component={NavLink}
        style={{ textDecoration: "none" }}
        to={{
          pathname: `/categories/${category.id}`,
        }}
        onClick={handleClickCategoryItem(category.name)}
      >
        <ListItemText primary={category.name} />
        {isSelected ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={isSelected} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <div style={{ paddingLeft: 5 }}>
            <SubCategory category={category} />
          </div>
        </List>
      </Collapse>
    </div>
  );
};
