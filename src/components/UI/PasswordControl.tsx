import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";

interface PasswordControlProps {
  name: string;
  required?: boolean;
  shrink?: boolean;
  value?: string;
  onChange: (event: React.ChangeEvent<any>) => void;
  fullWidth?: boolean;
  //   meta;
  error?: string;
}

export const PasswordControl: React.FC<PasswordControlProps> = (props) => {
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const {
    name,
    required,
    shrink,
    value,
    onChange,
    fullWidth,
    // meta,
    error,
  } = props;

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  let showError = false;
  let message = "";
  if (error !== undefined && error.length > 0) {
    showError = true;
    message = error;
  }
  //   if (meta !== undefined && meta.error && meta.touched) {
  //     showError = true;
  //     message = meta.error;
  //   }

  return (
    <FormControl
      error={showError}
      style={{ width: fullWidth ? "100%" : "25ch" }}
    >
      <InputLabel
        required={required}
        htmlFor="standard-adornment-password"
        shrink={shrink}
      >
        Password
      </InputLabel>
      <Input
        fullWidth
        name={name}
        placeholder="password"
        type={values.showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? (
                <FontAwesomeIcon icon="eye" />
              ) : (
                <FontAwesomeIcon icon="eye-slash" />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id="component-helper-text">{message}</FormHelperText>
    </FormControl>
  );
};
