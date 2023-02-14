import React from "react";
import { useNavigate } from "react-router-dom";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { Button } from "../../../../styles/global";
import { Item } from "./Item";
import { CheckoutInfo, ItemsContainer, Label, Price } from "./styles";

export const CheckoutItems = () => {
  const { coffees } = React.useContext(CoffeeContext);
  const [totalCoffeesPrice, setTotalCoffeesPrice] = React.useState(0);

  React.useEffect(() => {
    if (coffees.length) {
      const totalPriceCoffees = coffees.reduce((acc, value) => {
        const price = value.amount * value.price;
        return acc + price;
      }, 0);
      setTotalCoffeesPrice(totalPriceCoffees);
    }
  }, [coffees, setTotalCoffeesPrice]);

  const numberToString = (n: number) => {
    return n.toFixed(2).replace(".", ",");
  };

  const deliveryPrice = 3.5;
  const totalSum = totalCoffeesPrice + deliveryPrice;

  const formattedTotalCoffeesPrice = numberToString(totalCoffeesPrice);
  const formattedDelivery = numberToString(deliveryPrice);
  const formattedTotalSum = numberToString(totalSum);

  if (coffees.length)
    return (
      <ItemsContainer>
        {coffees.map((coffee) => (
          <Item key={coffee.id} {...coffee} />
          // <Item key={coffee.title} coffee={coffee} />
        ))}
        <CheckoutInfo>
          <div>
            <Label>Total de itens</Label>
            <Price>R$ {formattedTotalCoffeesPrice}</Price>
          </div>
          <div>
            <Label>Entrega</Label>
            <Price>R$ {formattedDelivery}</Price>
          </div>
          <div className="summary">
            <Label>Total</Label>
            <Price>R$ {formattedTotalSum}</Price>
          </div>
        </CheckoutInfo>
        <Button type="submit">Confirmar Pedido</Button>
      </ItemsContainer>
    );
  else return null;
};
