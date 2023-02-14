import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { FormInput } from "../../../../components/FormInput";
import {
  CheckoutFormContainer,
  Description,
  AddressContainer,
  PaymentContainer,
  PaymentMethodsContainer,
  AddressInfoContainer,
} from "./styles";
import { FormRadioInput } from "../../../../components/FormRadioInput";

export const CheckoutForm = () => {
  return (
    <CheckoutFormContainer>
      <AddressContainer>
        <Description svgColor="yellow">
          <MapPinLine size={25} />
          <div>
            <span className="title">Endereço de Entrega</span>
            <span className="subtitle">
              Informe o endereço onde deseja receber seu pedido
            </span>
          </div>
        </Description>
        <AddressInfoContainer>
          <FormInput label="CEP" type="text" id="cep" />
          <FormInput label="Rua" type="text" id="rua" />

          <div className="addressUpper">
            <FormInput
              label="Número"
              type="text"
              id="numero"
              parttern="[0-9]+"
              inputmode
            />
            <FormInput label="Complemento" type="text" id="complemento" />
          </div>
          <div className="addressLower">
            <FormInput label="Bairro" type="text" id="bairro" />
            <FormInput label="Cidade" type="text" id="cidade" />
            <FormInput label="UF" type="text" id="uf" />
          </div>
        </AddressInfoContainer>
      </AddressContainer>
      <PaymentContainer>
        <Description>
          <CurrencyDollar size={25} />
          <div>
            <span className="title">Pagamento</span>
            <span className="subtitle">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </Description>
        <PaymentMethodsContainer>
          <FormRadioInput
            id="credito"
            name="pagamento"
            value="Cartão de Crédito"
          >
            <CreditCard size={25} />
            Cartão de Crédito
          </FormRadioInput>
          <FormRadioInput id="debito" name="pagamento" value="Cartão de Débito">
            <Bank size={25} />
            Cartão de Débito
          </FormRadioInput>
          <FormRadioInput id="dinheiro" name="pagamento" value="Dinheiro">
            <Money size={25} />
            Dinheiro
          </FormRadioInput>
        </PaymentMethodsContainer>
      </PaymentContainer>
    </CheckoutFormContainer>
  );
};
