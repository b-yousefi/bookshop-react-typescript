import { Grid, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { SearchPanel } from "components/filter/SearchPanel";
import { BookList } from "./BookList";
import { clearFilter } from "store/filter/actions";

export const HomePage: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const clearBookFilter = React.useCallback(() => {
    dispatch(clearFilter());
  }, [dispatch]);

  useEffect(() => {
    clearBookFilter();
  }, [clearBookFilter]);

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
