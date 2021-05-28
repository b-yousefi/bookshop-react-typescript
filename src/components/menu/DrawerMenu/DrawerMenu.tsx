import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIconTypeMap,
  SwipeableDrawer,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import RoomIcon from "@material-ui/icons/Room";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { AppState } from "store";
import { CategoryList } from "./CategoryListItem";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface DrawerMenuProps {
  open: boolean;
  onToggleDrawer: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  logoutUser: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = (props) => {
  const classes = useStyles();
  const { open, onToggleDrawer } = props;

  const isLoggedIn: boolean = useSelector(
    (state: AppState) => state.user.isLoggedIn
  );

  useEffect(() => {}, [open]);

  const onLogout = () => {
    props.logoutUser();
  };

  const createListItemWithIcon = (
    path: string,
    Icon: OverridableComponent<SvgIconTypeMap>,
    title: string
  ): JSX.Element => {
    return (
      <ListItem
        button
        color="inherit"
        component={NavLink}
        to={path}
        onClick={onToggleDrawer(false)}
      >
        <ListItemIcon>
          <Icon />{" "}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItem>
    );
  };

  const createListItem = (path: string, title: string): JSX.Element => {
    return (
      <ListItem
        button
        color="inherit"
        component={NavLink}
        to={path}
        onClick={onToggleDrawer(false)}
      >
        <ListItemText primary={title} />
      </ListItem>
    );
  };

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
      <div role="presentation" onKeyDown={onToggleDrawer(false)}>
        <List>
          {createListItemWithIcon("/", HomeIcon, "Home")}
          <CategoryList />
          {createListItem("/authors", "Authors")}
          {createListItem("/publications", "Publications")}
          {createListItem("/about", "About")}
          {isLoggedIn && (
            <React.Fragment>
              <Divider />
              {createListItemWithIcon("/user_info", PersonIcon, "Profile")}
              {createListItemWithIcon(
                "/user_info/addresses",
                RoomIcon,
                "Addresses"
              )}
              {createListItemWithIcon(
                "/user_info/orders",
                ShoppingCartIcon,
                "Orders"
              )}
              <ListItem button color="inherit" onClick={onLogout}>
                <ListItemIcon>
                  <FontAwesomeIcon icon="sign-out-alt" />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </React.Fragment>
          )}
        </List>
      </div>
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
