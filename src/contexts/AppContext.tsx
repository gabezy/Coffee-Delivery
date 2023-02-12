import { Coffee } from "phosphor-react";
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
  removeItem: (title: string) => void;
  increaseAmount: (title: string) => void;
  decreaseAmount: (title: string) => void;
  createCheckoutOrder: (data: checkoutFormData) => void;
  resetTotalAmountOfCoffees: () => void;
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

  const removeItem = (title: string) => {
    setTotalAmountOfCoffees((prev) => {
      if (prev.length <= 0) return prev;
      return prev.filter((coffee) => coffee.title !== title);
    });
  };

  const increaseAmount = (title: string) => {
    setTotalAmountOfCoffees((prev) => {
      return prev.map((coffee) => {
        if (coffee.title === title) {
          const newAmount = coffee.amount + 1;
          return { ...coffee, amount: newAmount };
        } else return coffee;
      });
    });
  };

  const decreaseAmount = (title: string) => {
    setTotalAmountOfCoffees((prev) => {
      return prev.map((coffee) => {
        if (coffee.title === title && coffee.amount > 1) {
          const newAmount = coffee.amount - 1;
          return { ...coffee, amount: newAmount };
        } else return coffee;
      });
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

  const resetTotalAmountOfCoffees = () => {
    setTotalAmountOfCoffees([]);
  };

  return (
    <AppContext.Provider
      value={{
        totalAmountOfCoffees,
        checkoutOrderDataObject,
        addNewCoffee,
        removeItem,
        increaseAmount,
        decreaseAmount,
        createCheckoutOrder,
        resetTotalAmountOfCoffees,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
