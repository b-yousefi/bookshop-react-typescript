import { Grid, Paper } from "@material-ui/core";
import React from "react";
import { SearchPanel } from "../components/filter/SearchPanel";
import { BookList } from "./BookList";

export const HomePage: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Paper>
          <SearchPanel
            showCategoryFilter={true}
            showAuthorFilter={true}
            showPublicationFilter={true}
          />
        </Paper>
      </Grid>
      <Grid item container xs={12} md={9} spacing={2}>
        <BookList />
      </Grid>
    </Grid>
  );
};
