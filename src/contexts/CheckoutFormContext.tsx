import React, { ReactNode } from "react";
import { checkoutFormData } from "../pages/Checkout";

type CheckoutFormContextProps = {
  createCheckoutOrder: (data: checkoutFormData) => void;
  checkoutFormOrder: checkoutFormData;
};

export const CheckoutFormContext = React.createContext(
  {} as CheckoutFormContextProps
);

type CheckoutFormProviderProps = {
  children: ReactNode;
};

export const CheckoutFormProvider = ({
  children,
}: CheckoutFormProviderProps) => {
  const [checkoutFormOrder, setCheckoutFormOrder] =
    React.useState<checkoutFormData>({} as checkoutFormData);

  const createCheckoutOrder = (data: checkoutFormData) => {
    const checkoutOrder: checkoutFormData = {
      cep: data.cep,
      rua: data.rua,
      bairro: data.bairro,
      numero: data.numero,
      complemento: data.complemento,
      cidade: data.cidade,
      uf: data.uf.toUpperCase(),
      pagamento: data.pagamento,
    };

    setCheckoutFormOrder(checkoutOrder);
  };

  return (
    <CheckoutFormContext.Provider
      value={{
        createCheckoutOrder,
        checkoutFormOrder,
      }}
    >
      {children}
    </CheckoutFormContext.Provider>
  );
};
