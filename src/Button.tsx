import React from "react";

type ButtonPropsType = {
  title: string;
  onClickHandler?: () => void;
  isBtnDisabled?: boolean;
  classes?: string;
};

// С деструктуризацией

export const Button = ({
  title,
  onClickHandler,
  isBtnDisabled,
  classes,
}: ButtonPropsType) => {
  return (
    <button
      className={classes}
      disabled={isBtnDisabled}
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
};
