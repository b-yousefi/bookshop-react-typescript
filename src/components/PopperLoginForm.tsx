import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { PopperButton } from "./UI/PopperButton";

export const PopperLoginForm: React.FC = () => {
  const [popperOpen, setPopperOpen] = useState(false);

  const onOpenPopper = (open: boolean) => {
    setPopperOpen(open);
  };

  const onClick = () => {
    setPopperOpen(false);
  };

  return (
    <PopperButton
      title="Login"
      placement="bottom-end"
      icon="sign-in-alt"
      open={popperOpen}
      onOpenPopper={onOpenPopper}
    >
      <div>
        <LoginForm onClick={onClick} />
      </div>
    </PopperButton>
  );
};
