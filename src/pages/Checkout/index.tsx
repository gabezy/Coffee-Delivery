import React from "react";
import { AppContext } from "../../contexts/AppContext";
import { Container } from "../../styles/global";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutItems } from "./components/CheckoutItems";
import { CheckoutWrapper } from "./styles";

export const Checkout = () => {
  const { totalAmountOfCoffees } = React.useContext(AppContext);

  return (
    <Container>
      <CheckoutWrapper>
        <CheckoutForm />
        <CheckoutItems />
      </CheckoutWrapper>
    </Container>
  );
};
