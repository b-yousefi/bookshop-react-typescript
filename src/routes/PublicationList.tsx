import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
import { Grid } from "@material-ui/core";

import { PublicationItem } from "../components/PublicationItem";

export const PublicationListPage: React.FC = () => {
  const publications = useSelector((state: AppState) => state.publications.arr);

  return (
    <Grid container>
      <Grid item md={2}></Grid>
      <Grid container item md={8} spacing={1}>
        {publications.map((publication) => (
          <PublicationItem key={publication.id} publication={publication} />
        ))}
      </Grid>
    </Grid>
  );
};
