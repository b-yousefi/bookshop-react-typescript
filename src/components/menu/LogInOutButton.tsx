import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hidden, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { NavLink } from "react-router-dom";
import { PopperLoginForm } from "../PopperLoginForm";
import { thunkLogoutUser } from "../../store/user/thunk";

interface LogInOutButtonProps {
  isLoggedIn: boolean;
}

export const LogInOutButton: React.FC<LogInOutButtonProps> = (props) => {
  const { isLoggedIn } = props;
  const tooltipLabel = isLoggedIn ? "Logout" : "Login";
  const dispatch: Dispatch<any> = useDispatch();
  const onLogout = async () => {
    dispatch(thunkLogoutUser());
  };

  return isLoggedIn ? (
    <Tooltip title={tooltipLabel} aria-label={tooltipLabel}>
      <IconButton onClick={onLogout} color="inherit">
        <FontAwesomeIcon icon="sign-out-alt" />
      </IconButton>
    </Tooltip>
  ) : (
    <div>
      <Hidden smUp>
        <Tooltip title={tooltipLabel} aria-label={tooltipLabel}>
          <IconButton component={NavLink} to="/login" color="inherit">
            <FontAwesomeIcon icon="sign-in-alt" />
          </IconButton>
        </Tooltip>
      </Hidden>
      <Hidden xsDown>
        <PopperLoginForm />
      </Hidden>
    </div>
  );
};
