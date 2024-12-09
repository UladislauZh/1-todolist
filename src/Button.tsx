import React from "react";

type ButtonPropsType = {
  title: string;
  onClickHandler?: () => void;
};

// С деструктуризацией

export const Button = ({ title, onClickHandler }: ButtonPropsType) => {
  return <button onClick={onClickHandler}>{title}</button>;
};
