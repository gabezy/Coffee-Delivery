import React from "react";
import { Trash } from "phosphor-react";
import { AmountButton } from "../../../../../components/AmountButton";
import { CoffeeContext } from "../../../../../contexts/CoffeeContext";
import {
  ItemContainer,
  ItemContentContainer,
  Price,
  RemoveItemButton,
} from "./styles";
import { Coffee } from "../../../../../reducers/Coffees/reducer";

export const Item = ({ imageURL, price, title, amount, id }: Coffee) => {
  const stringPrice = price.toFixed(2).replace(".", ",");
  const { removeItem, increaseAmount, decreaseAmount } =
    React.useContext(CoffeeContext);

  const handleIncreaseAmount = () => {
    increaseAmount(id);
  };

  const handleDecreaseAmount = () => {
    decreaseAmount(id);
  };

  const handleRemoveCoffee = () => {
    removeItem(id);
  };

  return (
    <ItemContainer>
      <img src={imageURL} alt="" />
      <ItemContentContainer>
        <p className="titleItem">{title}</p>
        <div>
          <AmountButton
            amount={amount}
            handleClickDecrease={handleDecreaseAmount}
            handleClickIncrease={handleIncreaseAmount}
          />
          <RemoveItemButton onClick={handleRemoveCoffee}>
            <Trash size={20} />
            Remover
          </RemoveItemButton>
        </div>
      </ItemContentContainer>
      <Price>R$ {stringPrice}</Price>
    </ItemContainer>
  );
};
