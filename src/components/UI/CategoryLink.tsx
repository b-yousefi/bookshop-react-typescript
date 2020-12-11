import React from "react";
import { Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface CategoryLinkProps {
  categoryId: string;
}

export const CategoryLink: React.FC<CategoryLinkProps> = (props) => {
  const category = useSelector((state: AppState) =>
    state.categories.arr.find((c) => c.id.toString() === props.categoryId)
  );

  if (category === undefined) {
    return <div>Undefined Category</div>;
  }

  return (
    <Link
      color="inherit"
      component={NavLink}
      to={{
        pathname: `/categories/${category.id}`,
      }}
    >
      {category.name}
    </Link>
  );
};
