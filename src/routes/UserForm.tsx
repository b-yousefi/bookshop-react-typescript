import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { Field, Form } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { Button, Grid, Paper } from "@material-ui/core";

import { PasswordControl } from "components/UI/PasswordControl";
import { PhoneNumberControl } from "components/UI/PhoneNumberControl";
import { AppState } from "store";
import User from "models/User";
import { thunkRegsiterUser, thunkUpdateUser } from "store/user/thunk";

class UserInput extends User {
  confirmPassword?: string;
  constructor(
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    password: string,
    confirmPassword?: string
  ) {
    super(username, email, firstName, lastName, phoneNumber, password);
    if (confirmPassword) {
      this.confirmPassword = confirmPassword;
    } else {
      this.confirmPassword = password;
    }
  }
}

export const UserFormPage: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const isLoggedIn = useSelector((state: AppState) => state.user.isLoggedIn);
  const user: UserInput = useSelector((state: AppState) => state.user.user);

  const validate = (values: UserInput) => {
    const errors: UserInput = {} as UserInput;
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords don't match";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    return errors;
  };

  const onSubmit = async (values: UserInput) => {
    if (isLoggedIn) {
      dispatch(thunkUpdateUser(values));
    } else {
      dispatch(thunkRegsiterUser(values));
    }
  };

  const create_form = (submitting: boolean, handleSubmit: any) => {
    return (
      <form onSubmit={handleSubmit} noValidate>
        <Paper style={{ padding: 16 }}>
          <Grid container alignItems="flex-start" spacing={2}>
            <Grid item xs={12}>
              <Field
                fullWidth
                name="username"
                required
                component={TextField}
                type="text"
                label="Username"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                required
                name="firstName"
                component={TextField}
                type="text"
                label="First Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Field
                required
                name="lastName"
                component={TextField}
                type="text"
                label="Last Name"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                fullWidth
                name="email"
                required
                component={TextField}
                type="email"
                label="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <Field fullWidth name="phoneNumber">
                {(props) => (
                  <PhoneNumberControl
                    required
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field fullWidth name="password">
                {(props) => (
                  <PasswordControl
                    fullWidth
                    required
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    meta={props.meta}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Field name="confirmPassword">
                {(props) => (
                  <PasswordControl
                    fullWidth
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    meta={props.meta}
                  />
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
                {isLoggedIn ? "Update" : "Register"}
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
        initialValues={user ? user : ({} as UserInput)}
        validate={validate}
        render={({ handleSubmit, submitting }) =>
          create_form(submitting, handleSubmit)
        }
      />
    </div>
  );
};
