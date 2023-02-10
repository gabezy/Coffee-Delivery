import React, { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Container } from "../../styles/global";
import { CheckoutForm } from "./components/CheckoutForm";
import { CheckoutItems } from "./components/CheckoutItems";
import { Form } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const payments = ["Cartão de Crédito", "Cartão de Débito", "Dinheiro"];

const checkoutFormDataValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, "Preencha um CEP válido")
    .max(9, "Preencha um CEP válido"),
  rua: zod.string().min(1, "rua"),
  numero: zod.string().min(1, "numero"),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, "bairro"),
  cidade: zod.string().min(1, "cidade"),
  uf: zod.string().min(2, "uf").max(2, "uf"),
  pagamento: zod.string().refine((val) => payments.includes(val)),
});

export type checkoutFormData = zod.infer<
  typeof checkoutFormDataValidationSchema
>;

export const Checkout = () => {
  const checkoutOrderData = useForm({
    resolver: zodResolver(checkoutFormDataValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      pagamento: "",
    },
  });

  const { createCheckoutOrder } = useContext(AppContext);
  const navigate = useNavigate();

  const { handleSubmit, reset } = checkoutOrderData;

  const handleCreateCheckoutOrder = (data: checkoutFormData) => {
    createCheckoutOrder(data);
    navigate("/sucess");
    // reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleCreateCheckoutOrder)}>
        <FormProvider {...checkoutOrderData}>
          <CheckoutForm />
        </FormProvider>
        <CheckoutItems />
      </Form>
    </Container>
  );
};
