import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { Field, Form } from "react-final-form";
import { Button, Grid, Paper } from "@material-ui/core";
import { TextField } from "final-form-material-ui";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { thunkAddAddress, thunkEditAddress } from "store/address/thunk";

import { Map } from "components/UI/Map";
import Address from "models/Address";
import MarkerPoint from "models/MarkerPoint";
import { AppState } from "store";
import { Identifiable } from "models/Identifiable";

interface AddressFormProps extends RouteComponentProps<Identifiable> {
  onClick: () => void;
}

export const AddressForm: React.FC<AddressFormProps> = (props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const address = useSelector((state: AppState) =>
    state.addresses.arr.find((addr) => addr.id === props.match.params.id)
  );

  const [marker, setMarker] = useState<MarkerPoint>({
    longitude: address ? address.longitude : 51.389,
    latitude: address ? address.latitude : 35.6892,
  });

  const onMarkerChanged = (map: MarkerPoint) => {
    setMarker(map);
  };

  const validate = (inputAddress: Address) => {
    const errors: Address = {} as Address;
    if (!inputAddress.state) {
      errors.state = "Required";
    }
    if (!inputAddress.city) {
      errors.city = "Required";
    }
    if (!inputAddress.address) {
      errors.address = "Required";
    }
    return errors;
  };

  const onSubmit = async (submitedAddress: Address) => {
    submitedAddress.latitude = marker.latitude;
    submitedAddress.longitude = marker.longitude;
    if (address) {
      dispatch(thunkEditAddress(submitedAddress));
    } else {
      dispatch(thunkAddAddress(submitedAddress));
    }
  };

  const create_form = (submitting: boolean, handleSubmit: any) => {
    return (
      <form onSubmit={handleSubmit} noValidate>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={6}>
              <Field
                fullWidth
                name="state"
                required
                component={TextField}
                type="text"
                label="State"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                required
                name="city"
                component={TextField}
                type="text"
                label="City"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="zipCode"
                component={TextField}
                type="number"
                label="zipCode"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                fullWidth
                name="address"
                required
                component={TextField}
                type="text"
                label="Address"
                multiline
                rowsMax={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Field fullWidth name="map">
                {() => (
                  <div style={{ height: "400px" }}>
                    <Map
                      lon={marker.longitude}
                      lat={marker.latitude}
                      isEditable={true}
                      onMarkerChanged={onMarkerChanged}
                    />
                  </div>
                )}
              </Field>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                {address ? "Update" : "Add"}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    );
  };

  return (
    <div style={{ padding: 16, margin: "auto", maxWidth: 450 }}>
      <Form
        width="50px"
        onSubmit={onSubmit}
        initialValues={address ? address : {}}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, values }) =>
          create_form(submitting, handleSubmit)
        }
      />
    </div>
  );
};
