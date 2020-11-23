import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Author from "../models/Author";

interface AuthorItemProps extends RouteComponentProps {
  author: Author;
}

const AuthorItem_: React.FC<AuthorItemProps> = (props) => {
  const classes = useStyles();

  const { author } = props;

  return (
    <Grid item xs={6} md={3}>
      <Card className={classes.mediaroot}>
        <CardActionArea
          component={Link}
          to={{
            pathname: `${props.match.url}/${author.id}`,
          }}
        >
          <CardMedia
            className={classes.media}
            image={`data:image/jpeg;base64,${author.picture.data}`}
            title={author.fullName}
          />
          <CardContent
            component="div"
            className={classes.title}
            title={author.fullName}
          >
            <Typography noWrap gutterBottom variant="h5" component="h2">
              {author.fullName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h5">
              {author.readableBirthdayDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mediaroot: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    media: {
      height: 0,
      paddingTop: "100%",
    },
    title: {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  })
);

export const AuthorItem = withRouter(AuthorItem_);
