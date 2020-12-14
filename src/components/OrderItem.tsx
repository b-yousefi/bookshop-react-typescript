import React from "react";
import { NavLink } from "react-router-dom";
import { ListItem, Grid, Typography } from "@material-ui/core";

import Order from "../models/Order";

interface OrderItemProps {
  order: Order;
  url: string;
}

export const OrderItem: React.FC<OrderItemProps> = (props) => {
  const { order, url } = props;

  return (
    <ListItem
      button
      component={NavLink}
      to={{
        pathname: url,
      }}
    >
      <Grid container>
        <Grid item xs={7}>
          <Typography variant="body1" align="justify" gutterBottom>
            Total Price: ${order.totalPrice}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" align="justify" gutterBottom>
            Status: {order.currentStatus.status}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="justify"
            gutterBottom
          >
            Last changed at: Last changed at:{" "}
            {order.currentStatus.updatedAt.substr(0, 10)},{" "}
            {order.currentStatus.updatedAt.substr(11, 5)}
          </Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
};
