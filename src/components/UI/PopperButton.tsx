import React, { useRef } from "react";
import {
  Button,
  ClickAwayListener,
  Paper,
  Popper,
  PopperPlacementType,
  Tooltip,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface PopperButtonProps {
  open: boolean;
  onOpenPopper: (open: boolean) => void;
  tooltip?: string;
  title: string;
  placement: PopperPlacementType;
  disabled?: boolean;
  icon?: IconProp;
}

export const PopperButton: React.FC<PopperButtonProps> = (props) => {
  const anchorRef = useRef<any>();

  const {
    title,
    tooltip,
    placement,
    disabled,
    icon,
    onOpenPopper,
    open,
  } = props;

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    onOpenPopper(false);
  };

  const handleToggle = (event: React.MouseEvent) => {
    anchorRef.current = event.currentTarget;
    onOpenPopper(!open);
  };

  return (
    <React.Fragment>
      <Tooltip title={tooltip ? tooltip : ""}>
        <Button
          aria-label={title}
          id={title}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={handleToggle}
          startIcon={icon ? <FontAwesomeIcon icon={icon} /> : ""}
          size="large"
        >
          {icon ? "" : title}
        </Button>
      </Tooltip>
      <Popper
        open={open && !disabled}
        anchorEl={anchorRef.current}
        placement={placement}
        disablePortal
      >
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            {props.children}
          </ClickAwayListener>
        </Paper>
      </Popper>
    </React.Fragment>
  );
};
