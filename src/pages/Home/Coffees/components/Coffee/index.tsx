import React from "react";
import {
  BuyButton,
  CoffeeBuy,
  CoffeeCard,
  CoffeeDescription,
  CoffeeTitle,
  CoffeeType,
  CoffeeTypeBox,
} from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { CoffeeProps } from "../..";
import { AppContext } from "../../../../../contexts/AppContext";
import { AmountButton } from "../../../../../components/AmountButton";

export const Coffee = ({
  imageURL,
  title,
  types,
  description,
  price,
}: CoffeeProps) => {
  const [amountCoffee, setAmountCoffee] = React.useState(0);
  const { addNewCoffee } = React.useContext(AppContext);

  const handleAddCoffee = () => {
    setAmountCoffee((prev) => prev + 1);
  };

  const handleRemoveCoffee = () => {
    setAmountCoffee((prev) => {
      if (prev <= 0) return prev;
      else return prev - 1;
    });
  };

  const handleBuyCoffee = () => {
    const newCoffee = {
      title,
      amount: amountCoffee,
      price: Number(price.replace(",", ".")),
      imageURL: imageURL,
    };

    addNewCoffee(newCoffee);
  };

  return (
    <CoffeeCard>
      <img src={imageURL} alt="" />
      <CoffeeTypeBox>
        {types.map((type) => (
          <CoffeeType key={type}>{type}</CoffeeType>
        ))}
      </CoffeeTypeBox>
      <CoffeeTitle>{title}</CoffeeTitle>
      <CoffeeDescription>{description}</CoffeeDescription>
      <CoffeeBuy>
        <div className="price">
          R$<span>{price}</span>
        </div>
        <div className="amount">
          <AmountButton
            handleClickIncrease={handleAddCoffee}
            handleClickDecrease={handleRemoveCoffee}
            amount={amountCoffee}
          />
          <BuyButton type="button" onClick={handleBuyCoffee}>
            <ShoppingCart size={20} weight="fill" />
          </BuyButton>
        </div>
      </CoffeeBuy>
    </CoffeeCard>
  );
};
