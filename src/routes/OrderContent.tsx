import React, { useEffect, useCallback } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { thunkFetchOrderDetails } from "store/order/thunk";
import { AppState } from "store";
import { RouteComponentProps } from "react-router-dom";
import { Identifiable } from "models/Identifiable";
import { Box, Divider, Grid, List, Typography } from "@material-ui/core";
import emptyListPic from "resources/images/emptyList.jpg";
import { ListOrderItem } from "components/ShoppingCart/ListOrderItem";

export const OrderContent: React.FC<RouteComponentProps<Identifiable>> = (
  props
) => {
  const classes = useStyles();

  const dispatch: Dispatch<any> = useDispatch();

  const order = useSelector((state: AppState) =>
    state.orders.arr.find((o) => o.id == props.match.params.id)
  );

  const fetchedOrderDetails = useCallback(() => {
    if (order !== undefined) {
      return dispatch(thunkFetchOrderDetails(order));
    }
  }, [dispatch, order]);

  useEffect(() => {
    fetchedOrderDetails();
  }, [dispatch, fetchedOrderDetails]);

  if (order && order.orderItems && order.orderItems.length > 0) {
    return (
      <div className={classes.root}>
        <List dense className={classes.list}>
          {order.orderItems.map((orderItem) => {
            return (
              <ListOrderItem
                orderItem={orderItem}
                key={orderItem.id}
                isEditable={false}
                isReport={true}
              />
            );
          })}
        </List>
        <Divider variant="middle" />
        <Grid
          container
          style={{ padding: 16 }}
          spacing={2}
          alignItems={"center"}
        >
          <Grid item xs={6} md={4}>
            <Typography variant="body1">Total price</Typography>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography variant="body1">{order.totalPrice}$</Typography>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <Box display={"flex"} className={classes.emptyList}>
        <img src={emptyListPic} alt={"Empty List"} />
      </Box>
    );
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // width: '60vw',
      maxWidth: "auto",
      maxHeight: "auto",
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      maxHeight: "60vh",
      width: "auto",
      minWidth: "50vw",
      maxWidth: "90vw",
      overflow: "auto",
    },
    emptyList: {
      width: "auto",
      height: "auto",
    },
  })
);
