import React from "react";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  IconButton,
  Grid,
  Typography,
  ListItemIcon,
  Radio,
  ListItemSecondaryAction,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import Address from "../models/Address";
import { Map } from "../components/UI/Map";

interface AddressItemProps {
  address: Address;
  isEditable: boolean;
  isSelected: boolean;
  url: string;
  onDelete: (address: Address) => void;
  onSelect: (address: Address) => void;
}

export const AddressItem: React.FC<AddressItemProps> = (props) => {
  const { address } = props;

  const onDelete = () => {
    props.onDelete(address);
  };

  return (
    <ListItem>
      {!props.isEditable && (
        <ListItemIcon>
          <Radio
            edge="start"
            tabIndex={-1}
            disableRipple
            checked={props.isSelected}
            onChange={() => props.onSelect(address)}
            value={address.id}
          />
        </ListItemIcon>
      )}
      <Grid container spacing={2}>
        <Grid item xs={5} style={{ height: "150px" }}>
          <Map
            zoom={12}
            lon={address.longitude}
            lat={address.latitude}
            isEditable={false}
          />
        </Grid>
        <Grid item xs={5} style={{ alignSelf: "center" }}>
          <Typography gutterBottom variant="body1">
            {address.city}- {address.state}- {address.address}
          </Typography>
        </Grid>
      </Grid>
      {props.isEditable && (
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="Edit"
            component={NavLink}
            to={props.url}
          >
            <EditIcon fontSize="large" />
          </IconButton>
          <IconButton edge="end" aria-label="Delete" onClick={onDelete}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </ListItemSecondaryAction>
      )}
    </ListItem>
  );
};
