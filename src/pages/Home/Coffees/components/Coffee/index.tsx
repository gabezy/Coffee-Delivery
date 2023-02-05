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

export const Coffee = ({
  imageURL,
  title,
  types,
  description,
}: CoffeeProps) => {
  const [amount, setAmount] = React.useState(0);

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
            <button onClick={() => setAmount((prev) => prev - 1)}>−</button>
            <span>{amount}</span>
            <button onClick={() => setAmount((prev) => prev + 1)}>+</button>
          </AmountContainer>
          <Link to="/">
            <ShoppingCart size={20} weight="fill" />
          </Link>
        </div>
      </CoffeeBuy>
    </CoffeeCard>
  );
};
