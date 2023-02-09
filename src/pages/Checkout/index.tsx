import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../styles/global";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutItems } from "./components/CheckoutItems";
import { Form } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const checkoutFormDataValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, "Preencha um CEP válido")
    .max(9, "Preencha um CEP válido"),
  rua: zod.string().min(1, "rua"),
  numero: zod.string().min(1, "numero"),
  bairro: zod.string().min(1, "bairro"),
  cidade: zod.string().min(1, "cidade"),
  uf: zod.string().min(2, "uf").max(2, "uf"),
});

type checkoutFormData = zod.infer<typeof checkoutFormDataValidationSchema>;

export const Checkout = () => {
  const checkoutOrderData = useForm({
    resolver: zodResolver(checkoutFormDataValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      uf: "",
    },
  });

  const { handleSubmit, formState, reset } = checkoutOrderData;

  console.log(formState.errors);

  const createCheckoutOrder = (data: checkoutFormData) => {
    console.log(data);
    reset();
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
