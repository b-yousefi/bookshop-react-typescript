import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "store";
import { RouteComponentProps, withRouter } from "react-router";
import { CardMedia, Grid, List, Typography } from "@material-ui/core";

import { SearchPanel } from "components/filter/SearchPanel";
import { selectAuthor } from "store/filter/actions";
import { BookList } from "./BookList";
import { Identifiable } from "models/Identifiable";

const AuthorContent: React.FC<RouteComponentProps<Identifiable>> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const author = useSelector((state: AppState) =>
    state.authors.arr.find((auth) => auth.id === props.match.params.id)
  );

  const setFilter = useCallback(async () => {
    if (author !== undefined) {
      await dispatch(selectAuthor({ id: author.id, name: author.fullName }));
    }
  }, [dispatch, author]);

  useEffect(() => {
    setFilter();
  }, [setFilter]);

  if (author === undefined) {
    return <div>Nothing Found</div>;
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3}>
        <SearchPanel
          showCategoryFilter={true}
          showAuthorFilter={false}
          showPublicationFilter={true}
        />
      </Grid>
      <Grid container item xs={12} md={9}>
        <Grid item xs={12} md={4}>
          <CardMedia
            style={{ height: 0, paddingTop: "100%" }}
            image={`data:image/jpeg;base64,${author.picture.data}`}
            title={author.fullName}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ padding: 16 }}>
          <List component="div">
            <Typography component="h4" variant="h2">
              {author.fullName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {author.readableBirthdayDate}
            </Typography>
            <Typography variant="body1" align="justify" gutterBottom>
              {author.description}
            </Typography>
          </List>
        </Grid>
        <Grid container item style={{ padding: 16 }}>
          <BookList />
        </Grid>
      </Grid>
    </Grid>
  );
};

export const AuthorContentPage = withRouter(AuthorContent);
