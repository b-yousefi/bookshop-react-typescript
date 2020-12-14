import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
  CardMedia,
  Box,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { History } from "history";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { thunkUpdateShoppingCart } from "../../store/shoppingCart/thunk";
import OrderItem from "../../models/OrderItem";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

interface OrderItemProps {
  orderItem: OrderItem;
  isEditable: boolean;
  isReport: boolean;
  canOrder?: boolean;
  onListItemClicked: () => void;
}

export const ListOrderItem: React.FC<OrderItemProps> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const [errors, setErrors] = useState<{ quantity: string }>({ quantity: "" });
  const { orderItem, isEditable, isReport } = props;

  const [quantity, setQuantity] = useState(orderItem.quantity);

  const onCountChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof event.target.value === "number") {
      if (event.target.value > 0) {
        setQuantity(event.target.value);
      } else if (event.target.value === 0) {
        setErrors({ quantity: "Count cannot be zero" });
      } else {
        setErrors({ quantity: "Count cannot be negative" });
      }
    } else {
      setErrors({ quantity: "Count must be a positive number" });
    }
  };

  const onMouseLeave = () => () => {
    if (orderItem.quantity !== quantity)
      dispatch(thunkUpdateShoppingCart(orderItem.book, quantity));
  };

  const itemClicked = () => {
    //todo: uncomment
    // props.history.push(`/books/${orderItem.book.id}`);
    if (props.onListItemClicked) props.onListItemClicked();
  };

  const deleteClicked = () => {
    dispatch(thunkUpdateShoppingCart(orderItem.book, 0));
  };

  const classes = useStyles();
  return (
    <ListItem button onClick={itemClicked}>
      <ListItemAvatar>
        <CardMedia
          className={classes.media}
          image={`data:image/jpeg;base64,${orderItem.book.picture.data}`}
          title={orderItem.book.name}
          component={Paper}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography className={classes.title} gutterBottom component="h5">
            {orderItem.book.name}
          </Typography>
        }
        secondary={
          <Box display="flex" flexDirection="row">
            <Box style={{ width: 150 }}>
              <Typography gutterBottom component="h5">
                Price: {orderItem.book.price}$
              </Typography>
            </Box>
            {!isEditable && (
              <Box>
                <Typography noWrap gutterBottom component="h5">
                  Count: {orderItem.quantity}
                </Typography>
              </Box>
            )}
          </Box>
        }
      />
      <ListItemSecondaryAction style={{ width: "30%" }}>
        <Box display="flex" flexDirection="row" style={{ width: "100%" }}>
          <Box flexGrow={1}>
            {isEditable && (
              <TextField
                style={{ maxWidth: 100 }}
                id="standard-error-helper-text"
                label="Count"
                type="number"
                value={quantity}
                onChange={onCountChanged}
                onBlur={onMouseLeave}
                error={errors.quantity.length !== 0}
                helperText={errors.quantity}
              />
            )}
          </Box>
          {!isReport && (
            <Box>
              <IconButton
                name="delete"
                edge="end"
                aria-label="delete"
                onClick={deleteClicked}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        </Box>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      [theme.breakpoints.down("sm")]: {
        width: 150,
      },
    },
    media: {
      height: 70,
      margin: 2,
      marginRight: 10,
    },
  })
);
