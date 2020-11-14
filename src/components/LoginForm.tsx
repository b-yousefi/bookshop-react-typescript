import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { thunkLoginUser } from "../store/user/thunk";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, Grid, Link, Paper, TextField } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { PasswordControl } from "./UI/PasswordControl";

interface LoginFormInput {
  username: string;
  password: string;
}

interface LoginFormProps {
  onClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const [credentials, setCredentials] = useState<LoginFormInput>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormInput>({
    username: "",
    password: "",
  });

  const dispatch: Dispatch<any> = useDispatch();

  const classes = useStyles();

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    let cred = { ...credentials };
    let _errors = { ...errors };
    switch (event.target.name) {
      case "username":
        cred.username = event.target.value;
        if (cred.username.trim().length === 0) {
          _errors.username = "Required";
        }
        break;
      case "password":
        cred.password = event.target.value;
        if (cred.password.trim().length === 0) {
          _errors.password = "Required";
        }
        break;
    }

    setCredentials(cred);
    setErrors(_errors);
  };

  const validate = () => {
    let _errors = { ...errors };
    if (credentials.username === "") {
      _errors.username = "Required";
    }
    if (credentials.password === "") {
      _errors.password = "Required";
    }
    setErrors(_errors);
    return errors.username.length === 0 && errors.password.length === 0;
  };

  const onSubmitClicked = async (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      dispatch(thunkLoginUser(credentials.username, credentials.password));
    }
  };

  const onRegisterClicked = () => {
    props.onClick();
  };

  const create_form = () => {
    return (
      <form
        noValidate
        autoComplete="off"
        action="/"
        method="POST"
        onSubmit={onSubmitClicked}
      >
        <Grid container>
          <Grid item xs={12} container justify="center" alignItems="center">
            <TextField
              onChange={inputChanged}
              value={credentials.username}
              name="username"
              className={classes.textField}
              label="Username"
              placeholder="username"
              margin="normal"
              error={errors.username.length !== 0}
              helperText={errors.username}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ margin: 8 }}
            container
            justify="center"
            alignItems="center"
          >
            <PasswordControl
              error={errors.password}
              name="password"
              required
              shrink={true}
              onChange={inputChanged}
              value={credentials.password}
            />
          </Grid>
          <Grid item xs={6} container justify="center" alignItems="center">
            <Button variant="contained" type="submit" color="primary">
              Login
            </Button>
          </Grid>
          <Grid item xs={6} container justify="center" alignItems="center">
            <Link
              component={NavLink}
              to="/register"
              onClick={onRegisterClicked}
            >
              Register
            </Link>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <Box display="flex" justifyContent="center">
      <Paper className={classes.root}>{create_form()}</Paper>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "30ch",
      padding: "1ch",
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: "25ch",
      margin: theme.spacing(1),
    },
  })
);
