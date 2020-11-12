import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

interface ToolbarButtonProps {
  link: string;
  icon?: IconProp;
  title: string;
}

export const ToolbarButton: React.FC<ToolbarButtonProps> = (props) => {
  return (
    <Button
      color="inherit"
      component={NavLink}
      to={props.link}
      startIcon={props.icon && <FontAwesomeIcon icon={props.icon} />}
    >
      {props.title}
    </Button>
  );
};
