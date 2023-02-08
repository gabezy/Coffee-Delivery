import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../styles/global";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutItems } from "./components/CheckoutItems";
import { Form } from "./styles";

export const Checkout = () => {
  const checkoutOrderData = useForm();

  const { handleSubmit } = checkoutOrderData;

  const createCheckoutOrder = () => {
    console.log("a");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(createCheckoutOrder)}>
        <FormProvider {...checkoutOrderData}>
          <CheckoutForm />
        </FormProvider>
        <CheckoutItems />
      </Form>
    </Container>
  );
};
