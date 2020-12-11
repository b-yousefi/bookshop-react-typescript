import React, { useState, useCallback, useEffect } from "react";
import { Grid, Box, CircularProgress } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { BookItem } from "../components/BookItem";
import { thunkFilterBooksByPage } from "../store/book/thunk";
import emptyListPic from "../resources/images/emptyList.jpg";

export const BookList: React.FC = () => {
  const [page, setPage] = useState(1);

  const classes = useStyles();

  const dispatch: Dispatch<any> = useDispatch();

  const books = useSelector((state: AppState) => state.books.arr);

  const filter = useSelector((state: AppState) => state.filter.bookFilter);

  const isLoading = useSelector((state: AppState) => state.books.loading);

  const pageInfo = useSelector((state: AppState) => state.books.pageInfo);

  const fetchedBooks = useCallback(() => {
    const pageFilter = { ...filter, doRefresh: true };
    return dispatch(thunkFilterBooksByPage(pageFilter, page));
  }, [dispatch, page, filter]);

  useEffect(() => {
    fetchedBooks();
  }, [dispatch, fetchedBooks]);

  const handleChange = (_: any, goToPage: number) => {
    setPage(goToPage);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return (
      <Box
        flexGrow={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress size={100} />
      </Box>
    );
  }
  if (books.length === 0) {
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
    <React.Fragment>
      <Grid container item spacing={2}>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </Grid>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        style={{ width: "100%" }}
      >
        {pageInfo.totalPages > 1 && (
          <Pagination
            color="primary"
            count={pageInfo.totalPages}
            page={page}
            onChange={handleChange}
          />
        )}
      </Box>
    </React.Fragment>
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
