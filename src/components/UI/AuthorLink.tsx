import React from "react";
import { Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface AuthorLinkProps {
  authorId: string;
}

export const AuthorLink: React.FC<AuthorLinkProps> = (props) => {
  const author = useSelector((state: AppState) =>
    state.authors.arr.find((a) => a.id === props.authorId)
  );

  if (author === undefined) {
    return <div>Undefined Author</div>;
  }

  return (
    <Link
      color="inherit"
      component={NavLink}
      to={{
        pathname: `/authors/${author.id}`,
      }}
    >
      {author.fullName}
    </Link>
  );
};
