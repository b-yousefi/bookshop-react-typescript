import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Hidden, IconButton, Toolbar, Tooltip } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { ToolbarButton } from "./ToolbarButton";
import { NavLink } from "react-router-dom";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { LogInOutButton } from "./LogInOutButton";
import { CategoryButton } from "./CategoryButton";

interface AppToolbarProps {
  onMenuClicked: () => void;
}

const UserButton = () => {
  return (
    <Tooltip title={"Profile"} aria-label={"Profile"}>
      <IconButton component={NavLink} to="/user_info" color="inherit">
        <AccountBoxIcon />
      </IconButton>
    </Tooltip>
  );
};

export const AppToolbar: React.FC<AppToolbarProps> = (props) => {
  const classes = useStyles();

  return (
    <Toolbar>
      <Hidden smUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={props.onMenuClicked}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden xsDown>
        <ToolbarButton title="Home" link="/" icon="book-open" />
        <CategoryButton />
        <ToolbarButton title="Authors" link="/authors" />
        <ToolbarButton title="Publications" link="/publications" />
        <ToolbarButton title="About" link="/about" />
      </Hidden>
      <div className={classes.grow} />
      {/* {this.create_tlb_shoppingCart()}*/}
      <UserButton />
      <LogInOutButton isLoggedIn={true} />
    </Toolbar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    grow: {
      flexGrow: 1,
    },
  })
);
