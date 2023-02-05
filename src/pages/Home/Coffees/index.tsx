import React from "react";
import { Coffee } from "./components/Coffee";
import { CoffeesContainer, CoffeesList, CoffeesTitle } from "./styles";

export type CoffeeProps = {
  imageURL: string;
  types: string[];
  title: string;
  description: string;
};

export const Coffees = () => {
  const [coffeeList, setCoffeeList] = React.useState<CoffeeProps[]>([]);

  React.useEffect(() => {
    const fetchCoffeeData = async () => {
      const response = await fetch("../../../coffee-data.json");
      const coffeeJSON = await response.json();
      setCoffeeList([...coffeeJSON]);
    };

    fetchCoffeeData();
  }, [setCoffeeList]);

  return (
    <CoffeesContainer>
      <CoffeesTitle>Nossos cafés</CoffeesTitle>
      <CoffeesList>
        {coffeeList.map((coffee) => (
          <Coffee
            key={coffee.title}
            imageURL={coffee.imageURL}
            description={coffee.description}
            title={coffee.title}
            types={coffee.types}
          />
        ))}
      </CoffeesList>
    </CoffeesContainer>
  );
};
