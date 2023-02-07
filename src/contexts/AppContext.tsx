import React, { ReactNode } from "react";

export type Coffee = {
  title: string;
  amount: number;
  price: number;
  imageURL: string;
};

type AppContextProps = {
  totalAmountOfCoffees: Coffee[];
  addNewCoffee: (data: Coffee) => void;
  removeItem: (data: Coffee) => void;
};

export const AppContext = React.createContext({} as AppContextProps);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [totalAmountOfCoffees, setTotalAmountOfCoffees] = React.useState<
    Coffee[]
  >([]);

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

  return (
    <AppContext.Provider
      value={{ totalAmountOfCoffees, addNewCoffee, removeItem }}
    >
      {children}
    </AppContext.Provider>
  );
};
