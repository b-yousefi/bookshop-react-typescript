import React, { Fragment } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { Link, Route, Switch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { AddressListPage as AddressList } from "./AddressList";
import { UserFormPage as UserForm } from "./UserForm";
import { OrderList } from "./OrderList";

export const UserProfilePage: React.FC = () => {
  const classes = useStyles();
  const getValue = (location: string) => {
    if (location.startsWith("/user_info/addresses")) {
      return "/user_info/addresses";
    } else if (location.startsWith("/user_info/orders")) {
      return "/user_info/orders";
    }
    return location;
  };
  return (
    <div>
      <Route
        path="/user_info"
        render={({ location }) => (
          <Fragment>
            <Tabs
              value={getValue(location.pathname)}
              variant="fullWidth"
              className={classes.root}
              indicatorColor="secondary"
              textColor="secondary"
            >
              <Tab
                value={"/user_info"}
                label="Profile"
                component={Link}
                to="/user_info"
              />

              <Tab
                value={"/user_info/addresses"}
                label="Addresses"
                component={Link}
                to="/user_info/addresses"
              />
              <Tab
                value={"/user_info/orders"}
                label="Orders"
                component={Link}
                to="/user_info/orders"
              />
            </Tabs>
            <Switch>
              <Route exact={true} path="/user_info" component={UserForm} />
              <Route path="/user_info/addresses" component={AddressList} />
              <Route path="/user_info/orders" component={OrderList} />
            </Switch>
          </Fragment>
        )}
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      display: "flex",
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  })
);
