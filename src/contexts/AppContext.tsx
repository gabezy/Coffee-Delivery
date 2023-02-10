import React, { ReactNode } from "react";
import { checkoutFormData } from "../pages/Checkout";

export type Coffee = {
  title: string;
  amount: number;
  price: number;
  imageURL: string;
};

type AppContextProps = {
  totalAmountOfCoffees: Coffee[];
  checkoutOrderDataObject: checkoutFormData;
  addNewCoffee: (data: Coffee) => void;
  removeItem: (data: Coffee) => void;
  createCheckoutOrder: (data: checkoutFormData) => void;
};

export const AppContext = React.createContext({} as AppContextProps);

type AppContextProviderProps = {
  children: ReactNode;
};

const emptyCheckoutDataObject: checkoutFormData = {
  bairro: "",
  cep: "",
  cidade: "",
  numero: "",
  pagamento: "",
  rua: "",
  uf: "",
  complemento: "",
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [totalAmountOfCoffees, setTotalAmountOfCoffees] = React.useState<
    Coffee[]
  >([]);

  const [checkoutOrderDataObject, setCheckoutOrderDataObject] =
    React.useState<checkoutFormData>(emptyCheckoutDataObject);

  const addNewCoffee = (data: Coffee) => {
    const newCoffee: Coffee = {
      title: data.title,
      amount: data.amount,
      price: data.price,
      imageURL: data.imageURL,
    };

    setTotalAmountOfCoffees((prev) => [...prev, newCoffee]);
  };

  const removeItem = (data: Coffee) => {
    setTotalAmountOfCoffees((prev) => {
      if (prev.length <= 0) return prev;
      return prev.filter((coffee) => coffee.title !== data.title);
    });
  };

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

    setCheckoutOrderDataObject(checkoutOrder);
  };

  return (
    <AppContext.Provider
      value={{
        totalAmountOfCoffees,
        checkoutOrderDataObject,
        addNewCoffee,
        removeItem,
        createCheckoutOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
