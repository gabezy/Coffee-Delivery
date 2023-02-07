import React from "react";
import { Container } from "../../styles/global";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutItems } from "./components/CheckoutItems";
import { CheckoutWrapper } from "./styles";

export const Checkout = () => {
  return (
    <Container>
      <CheckoutWrapper>
        <CheckoutForm />
        <CheckoutItems />
      </CheckoutWrapper>
    </Container>
  );
};
