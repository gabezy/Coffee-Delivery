import React, { ReactNode } from "react";
import { checkoutFormData } from "../pages/Checkout";
import {
  ActionTypes,
  addNewCoffeeAction,
  decreaseCoffeeAmountAction,
  increaseCoffeeAmountAction,
  removeCoffeeAction,
  resetCoffeesAction,
} from "../reducers/Coffees/actions";
import { Coffee, coffeesReducer } from "../reducers/Coffees/reducer";

type AppContextProps = {
  coffees: Coffee[];
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
  const [coffees, dispatch] = React.useReducer(coffeesReducer, []);

  const [checkoutOrderDataObject, setCheckoutOrderDataObject] =
    React.useState<checkoutFormData>(emptyCheckoutDataObject);

  const addNewCoffee = (data: Coffee) => {
    const id = String(new Date().getTime());
    const newCoffee: Coffee = {
      id,
      title: data.title,
      amount: data.amount,
      price: data.price,
      imageURL: data.imageURL,
    };
    dispatch(addNewCoffeeAction(newCoffee));
  };

  const removeItem = (id: string) => {
    dispatch(removeCoffeeAction(id));
  };

  const increaseAmount = (id: string) => {
    dispatch(increaseCoffeeAmountAction(id));
  };

  const decreaseAmount = (id: string) => {
    dispatch(decreaseCoffeeAmountAction(id));
  };

  const resetTotalAmountOfCoffees = () => {
    dispatch(resetCoffeesAction());
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
        coffees,
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
