import React from "react";
import { Grid, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { AppState } from "store";
import { AuthorItem } from "components/AuthorItem";
import emptyListPic from "resources/images/emptyList.jpg";
import { AuthorContentPage } from "./AuthorContent";

const AuthorList: React.FC<RouteComponentProps> = (props) => {
  const classes = useStyles();

  const authors = useSelector((state: AppState) => state.authors.arr);

  if (authors.length === 0) {
    return (
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.emptyList}
      >
        <img
          src={emptyListPic}
          alt={"Empty List"}
          style={{ maxWidth: "100%" }}
        />
      </Box>
    );
  }

  return (
    <Grid container spacing={1}>
      <Switch>
        <Route exact path={`${props.match.url}`}>
          <Grid item md={2}></Grid>
          <Grid container item xs={12} md={8} spacing={2}>
            {authors.map((author) => (
              <AuthorItem key={author.id} author={author} />
            ))}
          </Grid>
        </Route>
        <Route
          exact
          path={`${props.match.url}/:id`}
          component={AuthorContentPage}
        />
      </Switch>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    emptyList: {
      width: "auto",
      height: "auto",
    },
  })
);

export const AuthorListPage = withRouter(AuthorList);
