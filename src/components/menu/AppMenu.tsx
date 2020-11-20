import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { AppBar, Hidden } from "@material-ui/core";
import { AppToolbar } from "./AppToolbar";
import { DrawerMenu } from "./DrawerMenu";
import { thunkFetchAuthors } from "../../store/author/thunk";
import { thunkFetchPublications } from "../../store/publication/thunk";

export const AppMenu: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const dispatch: Dispatch<any> = useDispatch();

  const fetchedAuthors = useCallback(() => dispatch(thunkFetchAuthors()), [
    dispatch,
  ]);

  const fetchedPublications = useCallback(
    () => dispatch(thunkFetchPublications()),
    [dispatch]
  );

  useEffect(() => {
    fetchedAuthors();
    fetchedPublications();
  }, [fetchedAuthors, fetchedPublications]);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const openDrawerClicked = () => {
    setOpenDrawer(true);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <AppToolbar onMenuClicked={openDrawerClicked} />
      </AppBar>
      <Hidden mdUp>
        <DrawerMenu open={openDrawer} onToggleDrawer={toggleDrawer} />
      </Hidden>
    </React.Fragment>
  );
};
