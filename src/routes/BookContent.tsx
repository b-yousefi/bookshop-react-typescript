import React from "react";

import {
  Breadcrumbs,
  CardMedia,
  Grid,
  List,
  Typography,
  Hidden,
} from "@material-ui/core";
import { RouteComponentProps } from "react-router-dom";
import { Identifiable } from "models/Identifiable";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { AuthorLink } from "components/UI/AuthorLink";
import { CategoryLink } from "components/UI/CategoryLink";
import { PublicationLink } from "components/UI/PublicationLink";

export const BookContentPage: React.FC<RouteComponentProps<Identifiable>> = (
  props
) => {
  const book = useSelector((state: AppState) =>
    state.books.arr.find((b) => b.id === Number(props.match.params.id))
  );

  if (book === undefined) {
    return <div>Nothing Found</div>;
  }

  return (
    <Grid container style={{ padding: 20 }}>
      <Hidden smDown>
        <Grid item md={2} />
      </Hidden>
      <Grid item container xs={12} md={8} spacing={2}>
        <Grid item container>
          <Grid item xs={12} md={4}>
            <CardMedia
              style={{ height: 0, paddingTop: "150%", marginTop: 35 }}
              image={`data:image/jpeg;base64,${book.picture.data}`}
              title={book.name}
            />
          </Grid>
          <Grid item xs={12} md={8} style={{ padding: 16 }}>
            <List component="div">
              <Typography component="h4" variant="h2">
                {book.name}
              </Typography>
              <Typography variant="body1" align="justify" gutterBottom>
                {book.summary}
              </Typography>
            </List>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={4} md={2}>
            <Typography variant="body1" gutterBottom>
              Authors:
            </Typography>
          </Grid>
          <Grid item xs={8} md={10}>
            <Breadcrumbs aria-label="breadcrumb" separator=",">
              {book.authorIds.map((id) => {
                return <AuthorLink key={id} authorId={id.toString()} />;
              })}
            </Breadcrumbs>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography variant="body1" gutterBottom>
              Categories:
            </Typography>
          </Grid>
          <Grid item xs={8} md={10}>
            <Breadcrumbs aria-label="breadcrumb" separator=",">
              {book.categoryIds.map((id) => {
                return <CategoryLink key={id} categoryId={id} />;
              })}
            </Breadcrumbs>
          </Grid>
          <Grid item xs={4} md={2}>
            <Typography variant="body1" gutterBottom>
              Publication:
            </Typography>
          </Grid>
          <Grid item xs={8} md={10}>
            <Breadcrumbs aria-label="breadcrumb" separator=",">
              <PublicationLink publicationId={book.publicationId.toString()} />
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
