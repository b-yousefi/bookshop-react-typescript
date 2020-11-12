import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hidden, IconButton, Tooltip } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

interface LogInOutButtonProps {
  isLoggedIn: boolean;
}

export const LogInOutButton: React.FC<LogInOutButtonProps> = (props) => {
  const isLoggedIn = { props };
  const tooltipLabel = isLoggedIn ? "Logout" : "Login";

  const onLogout = () => {
    //todo: change
    //this.props.logoutUser();
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
        {
          //todo: change
          /* <PopperLoginForm /> */
        }
      </Hidden>
    </div>
  );
};
