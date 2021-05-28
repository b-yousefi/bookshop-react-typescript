import React, { useEffect } from "react";
import { Button, Divider, Grid, List, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { thunkFetchShoppingCart } from "store/shoppingCart/thunk";
import Order from "models/Order";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { Dispatch } from "redux";
import { ListOrderItem } from "./ListOrderItem";

interface ShoppingCartProps {
  isEditable: boolean;
  isReport: boolean;
  canOrder: boolean;
  onClick: () => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = (props) => {
  const cart: Order = useSelector((state: AppState) => state.shoppingCart.cart);
  const dispatch: Dispatch<any> = useDispatch();

  const fetchedCart = React.useCallback(
    () => dispatch(thunkFetchShoppingCart()),
    [dispatch]
  );

  useEffect(() => {
    fetchedCart();
  }, [dispatch, fetchedCart]);

  const onListItemClicked = () => {
    if (props.onClick) props.onClick();
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List dense className={classes.list}>
        {cart.orderItems &&
          cart.orderItems.map((orderItem) => {
            return (
              <ListOrderItem
                key={orderItem.id}
                orderItem={orderItem}
                onListItemClicked={onListItemClicked}
                isEditable={props.isEditable}
                isReport={props.isReport}
              />
            );
          })}
      </List>
      <Divider variant="middle" />
      <Grid container style={{ padding: 16 }} spacing={2} alignItems={"center"}>
        <Grid item xs={6} md={4}>
          <Typography variant="body1">Total price</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="body1">{cart.totalPrice}$</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          {props.canOrder && (
            <Button
              variant="contained"
              onClick={onListItemClicked}
              color="primary"
              component={NavLink}
              to="/order"
              style={{ width: "100%" }}
            >
              Order
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
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
      minWidth: "30vw",
      maxWidth: "90vw",
      overflow: "auto",
    },
  })
);
