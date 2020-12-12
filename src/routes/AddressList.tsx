import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, List } from "@material-ui/core";

import { AppState } from "../store";
import {
  thunkFetchAddresses,
  thunkDeleteAddress,
} from "../store/address/thunk";
import { AddressItem } from "../components/AddressItem";
import {
  Route,
  Switch,
  NavLink,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import emptyListPic from "../resources/images/emptyList.jpg";
import Address from "../models/Address";

interface AddressListProps extends RouteComponentProps {
  isEditable: boolean;
  onSelectAddress: (address: Address) => void;
}

const AddressList: React.FC<AddressListProps> = (props) => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useDispatch();

  const [selectedAddress, setSelectedAddress] = useState<Address>();

  const addresses = useSelector((state: AppState) => state.addresses.arr);

  const fetchedAddresses = useCallback(() => dispatch(thunkFetchAddresses()), [
    dispatch,
  ]);

  useEffect(() => {
    fetchedAddresses();
  }, [dispatch, fetchedAddresses]);

  const handleSelect = (address: Address) => {
    setSelectedAddress(address);
    props.onSelectAddress(address);
  };

  const handleDelete = (address: Address) => () => {
    dispatch(thunkDeleteAddress(address));
  };

  return (
    <Box display="flex" justifyContent="center">
      <Switch>
        <Route exact path={`${props.match.url}`}>
          <Box flexDirection={"column"} className={classes.root}>
            {addresses.length === 0 ? (
              <Box
                display={"flex"}
                justifyContent="center"
                className={classes.emptyList}
              >
                <img
                  src={emptyListPic}
                  alt={"Empty List"}
                  style={{ maxWidth: "100%" }}
                />
              </Box>
            ) : (
              <List className={classes.list}>
                {addresses.map((address) => (
                  <AddressItem
                    address={address}
                    isSelected={
                      selectedAddress !== undefined &&
                      selectedAddress.id === address.id
                    }
                    isEditable={props.isEditable}
                    onSelect={handleSelect}
                    onDelete={handleDelete}
                    url={`${props.match.url}/${address.id}`}
                  />
                ))}
              </List>
            )}
            {props.isEditable && (
              <Box display={"flex"} style={{ width: 50, margin: 14 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={NavLink}
                  to={`${props.match.url}/new`}
                >
                  Add
                </Button>
              </Box>
            )}
          </Box>
        </Route>
        {/* todo */}
        {/* <Route path={`${props.match.url}/:id`} component={AddressForm} /> */}
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
    emptyList: {
      width: "auto",
      height: "auto",
    },
  })
);

export const AddressListPage = withRouter(AddressList);
