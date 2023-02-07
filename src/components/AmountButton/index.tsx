import React from "react";
import { AmountContainer } from "./styles";

type AmountButtonProps = {
  handleClickIncrease: () => void;
  handleClickDecrease: () => void;
  amount: number;
};

export const AmountButton = ({
  handleClickIncrease,
  handleClickDecrease,
  amount,
}: AmountButtonProps) => {
  return (
    <AmountContainer>
      <button onClick={handleClickDecrease} type="button">
        −
      </button>
      <span>{amount}</span>
      <button onClick={handleClickIncrease} type="button">
        +
      </button>
    </AmountContainer>
  );
};
