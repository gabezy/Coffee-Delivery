import React from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { FormInput } from "../../../../components/FormInput";
import {
  Container,
  Description,
  Form,
  PaymentMethodsWrapper,
  PaymentWrapper,
  Wrapper,
} from "./styles";

export const CheckoutForm = () => {
  return (
    <Container>
      <Wrapper>
        <Description svgColor="yellow">
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
      </Wrapper>
      <PaymentWrapper>
        <Description>
          <CurrencyDollar size={25} />
          <div>
            <span className="title">Pagamento</span>
            <span className="subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </Description>
        <PaymentMethodsWrapper>
          <button>
            <CreditCard size={25} />
            Cartão de Crédito
          </button>
          <button>
            <Bank size={25} />
            Cartão de Débito
          </button>
          <button>
            <Money size={25} />
            Dinheiro
          </button>
        </PaymentMethodsWrapper>
      </PaymentWrapper>
    </Container>
  );
};
