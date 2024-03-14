import React, { ReactNode } from "react";

interface Props {
  children: ReactNode; //children is key word, can be string, number etc
  color?: "primary" | "secondary" | "danger";
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={(event) => {
        onClick(event);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
