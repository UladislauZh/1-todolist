import React from "react";

type ButtonPropsType = {
  title: string;
  onClickHandler?: () => void;
  isBtnDisabled?: boolean;
};

// С деструктуризацией

export const Button = ({
  title,
  onClickHandler,
  isBtnDisabled,
}: ButtonPropsType) => {
  return (
    <button disabled={isBtnDisabled} onClick={onClickHandler}>
      {title}
    </button>
  );
};
