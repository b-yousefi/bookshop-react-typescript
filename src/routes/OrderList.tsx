import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, List } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { Route, Switch, RouteComponentProps } from "react-router-dom";

import { AppState } from "store";
import { OrderItem } from "components/OrderItem";
import { thunkFetchOrders } from "store/order/thunk";
import { OrderContent } from "./OrderContent";

export const OrderList: React.FC<RouteComponentProps> = (props) => {
  const orders = useSelector((state: AppState) => state.orders.arr);
  const pageInfo = useSelector((state: AppState) => state.books.pageInfo);

  const [page, setPage] = useState(1);

  const dispatch: Dispatch<any> = useDispatch();

  const fetchedOrders = useCallback(() => {
    return dispatch(thunkFetchOrders(page));
  }, [dispatch, page]);

  useEffect(() => {
    fetchedOrders();
  }, [dispatch, fetchedOrders]);

  const handlePageChange = (_: any, goToPage: number) => {
    setPage(goToPage);
    window.scrollTo(0, 0);
  };

  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Switch>
        <Route exact path={`${props.match.url}`}>
          <Box flexDirection={"column"} className={classes.root}>
            <List className={classes.list}>
              {orders.map((ord) => (
                <OrderItem
                  key={ord.id}
                  order={ord}
                  url={`${props.match.url}/${ord.id}`}
                />
              ))}
            </List>
            <Box
              display="flex"
              justifyContent="center"
              m={1}
              p={1}
              style={{ width: "100%" }}
            >
              {pageInfo.totalPages > 1 && (
                <Pagination
                  color="secondary"
                  count={pageInfo.totalPages}
                  page={page}
                  onChange={handlePageChange}
                />
              )}
            </Box>
          </Box>
        </Route>
        <Route path={`${props.match.url}/:id`} component={OrderContent} />
      </Switch>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      maxWidth: 800,
    },
    list: {
      // maxHeight: 500,
    },
  })
);
