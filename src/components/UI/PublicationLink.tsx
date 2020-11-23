import React from "react";
import { Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface PublicationLinkProps {
  publicationId: string;
}

export const PublicationLink: React.FC<PublicationLinkProps> = (props) => {
  const publication = useSelector((state: AppState) =>
    state.publications.arr.find((a) => a.id === props.publicationId)
  );

  if (publication === undefined) {
    return <div>Undefined Publication</div>;
  }

  return (
    <Link
      color="inherit"
      component={NavLink}
      to={{
        pathname: `/publications`,
      }}
    >
      {publication.name}
    </Link>
  );
};
