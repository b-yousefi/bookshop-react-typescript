import React, { useState } from "react";
import { AppBar, Hidden } from "@material-ui/core";
import { AppToolbar } from "./AppToolbar";
import { DrawerMenu } from "./DrawerMenu";

export const AppMenu: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

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
