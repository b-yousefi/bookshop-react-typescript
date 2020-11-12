import { SwipeableDrawer } from "@material-ui/core";
import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface DrawerMenuProps {
  open: boolean;
  onToggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = (props) => {
  const classes = useStyles();
  const { open, onToggleDrawer } = props;

  useEffect(() => {}, [open]);

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onToggleDrawer(false)}
      onOpen={onToggleDrawer(true)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div role="presentation" onKeyDown={onToggleDrawer(false)}></div>
    </SwipeableDrawer>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      width: "250px",
    },
  })
);
