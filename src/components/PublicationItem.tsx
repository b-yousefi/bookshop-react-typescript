import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Publication from "models/Publication";

interface PublicationItemProps {
  publication: Publication;
}

export const PublicationItem: React.FC<PublicationItemProps> = (props) => {
  const { publication } = props;

  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader
          title={publication.name}
          action={
            <IconButton aria-label="settings" href={publication.website}>
              <FontAwesomeIcon icon="link" />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="body1" align="justify" gutterBottom>
            {publication.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="medium"
            color="primary"
            component={NavLink}
            to="/authors"
          >
            Authors
          </Button>
          <Button size="medium" color="primary" component={NavLink} to="/home">
            Books
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
