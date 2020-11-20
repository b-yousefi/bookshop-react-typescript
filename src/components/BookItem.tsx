import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Badge,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

import Book from "../models/Book";
import { AppState } from "../store";
import { thunkUpdateShoppingCart } from "../store/shoppingCart/thunk";

interface BookItemProps {
  book: Book;
}

export const BookItem: React.FC<BookItemProps> = (props) => {
  const isLoggedIn: boolean = useSelector(
    (state: AppState) => state.user.isLoggedIn
  );

  const orderItem = useSelector((state: AppState) =>
    state.shoppingCart.cart.orderItems.find((item) => item.book.id === book.id)
  );

  let book_order_count = 0;
  if (orderItem !== undefined) {
    book_order_count = orderItem.quantity;
  }

  const classes = useStyles();

  const dispatch: Dispatch<any> = useDispatch();

  const { book } = props;

  const addToCartClicked = () => {
    if (isLoggedIn) {
      book_order_count++;
      dispatch(thunkUpdateShoppingCart(book, book_order_count));
    } else {
      // this.setState({ open_signIn: true });
    }
  };

  const removeFromCartClicked = () => {
    book_order_count--;
    dispatch(thunkUpdateShoppingCart(book, book_order_count));
  };

  return (
    <Grid key={book.id} item xs={6} md={3} sm={4}>
      <Card className={classes.mediaroot}>
        <CardActionArea
          component={Link}
          to={{
            pathname: `/books/${book.id}`,
          }}
        >
          <CardMedia
            className={classes.media}
            image={`data:image/jpeg;base64,${book.picture.data}`}
            title={book.name}
          />

          <CardContent
            component="div"
            className={classes.content}
            title={book.name}
          >
            <Typography noWrap gutterBottom component="h5">
              {book.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing className={classes.action}>
          <Grid container alignItems={"center"}>
            <Grid item sm={6} xs={12}>
              <Typography
                gutterBottom
                component="h5"
                style={{ paddingInlineStart: 10 }}
              >
                Price:{book.price}$
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip
                title="Remove from shopping cart"
                aria-label="remove from shopping cart"
              >
                <span>
                  <IconButton
                    aria-label="remove from shopping cart"
                    disabled={book_order_count === 0}
                    onClick={removeFromCartClicked}
                  >
                    <RemoveShoppingCartIcon />
                  </IconButton>
                </span>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip
                title="Add to shopping cart"
                aria-label="add to shopping cart"
              >
                <span>
                  <IconButton
                    aria-label="add to shopping cart"
                    disabled={book.quantity === 0}
                    onClick={addToCartClicked}
                  >
                    <Badge badgeContent={book_order_count} color="secondary">
                      <AddShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </span>
              </Tooltip>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
    },
    mediaroot: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },
    media: {
      height: 0,
      paddingTop: "130%",
    },
    content: {
      paddingBottom: 5,
    },
    action: {
      paddingTop: 5,
    },
  })
);
