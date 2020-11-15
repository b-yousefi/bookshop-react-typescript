import React, { useRef, useState } from "react";
import {
  Badge,
  ClickAwayListener,
  IconButton,
  Paper,
  Popper,
  PopperPlacementType,
  Tooltip,
} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";

interface PopperBadgeButtonProps {
  open: boolean;
  onOpenPopper: (open: boolean) => void;
  tooltip?: string;
  title: string;
  placement: PopperPlacementType;
  disabled?: boolean;
  svgIcon: string;
  badgeContent?: string;
}

export const PopperBadgeButton: React.FC<PopperBadgeButtonProps> = (props) => {
  const anchorRef = useRef<any>();

  const {
    title,
    tooltip,
    placement,
    disabled,
    badgeContent,
    svgIcon,
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
        <IconButton
          aria-label={title}
          id={title}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={handleToggle}
        >
          <Badge badgeContent={badgeContent} color="secondary">
            <SvgIcon>
              <path d={svgIcon} />
            </SvgIcon>
          </Badge>
        </IconButton>
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
