import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { PopperButton } from "./PopperButton";

export const PopperLoginForm: React.FC = () => {
  const [popperOpen, setPopperOpen] = useState(false);

  const onOpenPopper = (open: boolean) => {
    setPopperOpen(open);
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
        <LoginForm />
      </div>
    </PopperButton>
  );
};
