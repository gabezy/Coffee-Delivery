import React from "react";
import {
  AmountContainer,
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

export const Coffee = ({
  imageURL,
  title,
  types,
  description,
}: CoffeeProps) => {
  const [amountCoffee, setAmountCoffee] = React.useState(0);
  const { addItem, removeItem } = React.useContext(AppContext);

  const handleAddCoffee = () => {
    addItem();
    setAmountCoffee((prev) => prev + 1);
  };

  const handleRemoveCoffee = () => {
    removeItem();
    setAmountCoffee((prev) => {
      if (prev <= 0) return prev;
      else return prev - 1;
    });
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
          R$<span>9,90</span>
        </div>
        <div className="amount">
          <AmountContainer>
            <button onClick={handleRemoveCoffee}>−</button>
            <span>{amountCoffee}</span>
            <button onClick={handleAddCoffee}>+</button>
          </AmountContainer>
          <Link to="/">
            <ShoppingCart size={20} weight="fill" />
          </Link>
        </div>
      </CoffeeBuy>
    </CoffeeCard>
  );
};
