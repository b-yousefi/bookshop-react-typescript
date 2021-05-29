import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Category from "models/Category";
import ClassIcon from "@material-ui/icons/Class";

import { AppState } from "store";
import { CategoryItem } from "./CategoryItem";

export const CategoryList: React.FC = () => {
  const [openCategoryList, setOpenCategoryList] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<string | undefined>(undefined);

  const categories: Category[] = useSelector(
    (state: AppState) => state.categories.tree
  );

  const handleClickCategoryItem = (id: string) => () => {
    if (selectedCategory === undefined || selectedCategory !== id) {
      setSelectedCategory(id);
    } else {
      setSelectedCategory(undefined);
    }
  };

  const handleClickCategoryList = () => {
    setOpenCategoryList(!openCategoryList);
  };

  return (
    categories && (
      <div>
        <ListItem button onClick={handleClickCategoryList}>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {openCategoryList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCategoryList} timeout="auto" unmountOnExit>
          <List component="nav">
            {categories.map((category) => {
              return (
                <CategoryItem
                  category={category}
                  isSelected={selectedCategory === category.name}
                  handleClickCategoryItem={handleClickCategoryItem}
                />
              );
            })}
          </List>
        </Collapse>
      </div>
    )
  );
};
