import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Typography,
  Grid,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { NavLink, Redirect } from "react-router-dom";

import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart";
import { AddressListPage } from "./AddressList";
import Address from "../models/Address";
import { thunkCloseShoppingCart } from "../store/shoppingCart/thunk";

export const OrderPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<Address>();
  const steps: string[] = ["Check Order", "Select an address", "Finalize"];

  const classes = useStyles();

  const dispatch: Dispatch<any> = useDispatch();

  const getStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <ShoppingCart
            isEditable={true}
            isReport={false}
            canOrder={false}
            onClick={() => {}}
          />
        );
      case 1:
        return (
          <Box display={"flex"} flexDirection={"column"} m={2}>
            <AddressListPage
              isEditable={false}
              onSelectAddress={(address: Address) =>
                setSelectedAddress(address)
              }
            />
            <Button
              variant="contained"
              color="secondary"
              style={{ marginBottom: 5 }}
              component={NavLink}
              to="/addresses"
            >
              Add or Edit Addresses
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box display={"flex"} flexDirection={"column"} m={2}>
            <ShoppingCart
              isEditable={false}
              isReport={true}
              canOrder={false}
              onClick={() => {}}
            />
            <Typography variant={"body1"}>
              Sent to address: {selectedAddress!.address}
            </Typography>
          </Box>
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      if (selectedAddress) {
        dispatch(thunkCloseShoppingCart(selectedAddress));
        setActiveStep(activeStep + 1);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justify={"center"}>
        {activeStep === steps.length ? (
          <Redirect to={"/user_info/orders"} />
        ) : (
          <Grid item xs={12} md={8}>
            {getStepContent(activeStep)}
            <Box>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={activeStep === 1 && selectedAddress === undefined}
              >
                {activeStep === steps.length - 1 ? "Complete order" : "Next"}
              </Button>
            </Box>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);
