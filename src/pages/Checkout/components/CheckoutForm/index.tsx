import { MapPinLine } from "phosphor-react";
import React from "react";
import { FormInput } from "../../../../components/FormInput";
import { Container, Description, Form } from "./styles";

export const CheckoutForm = () => {
  return (
    <Container>
      <Description>
        <MapPinLine size={25} />
        <div>
          <span className="title">Endereço de Entrega</span>
          <span className="subtitle">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </Description>
      <Form>
        <FormInput label="CEP" type="text" id="cep" />
        <FormInput label="Rua" type="text" id="rua" />

        <div className="addressUpper">
          <FormInput label="Número" type="number" id="numero" />
          <FormInput label="Complemento" type="text" id="complemento" />
        </div>
        <div className="addressLower">
          <FormInput label="Bairro" type="text" id="bairro" />
          <FormInput label="Cidade" type="text" id="cidade" />
          <FormInput label="UF" type="text" id="uf" />
        </div>
      </Form>
    </Container>
  );
};
