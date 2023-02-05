import React, { ReactNode } from "react";

type AppContextProps = {
  amountItems: number;
  addItem: () => void;
  removeItem: () => void;
};

export const AppContext = React.createContext({} as AppContextProps);

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [amountItems, setAmountItems] = React.useState(0);

  const addItem = () => {
    setAmountItems((prev) => prev + 1);
  };

  const removeItem = () => {
    setAmountItems((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };

  return (
    <AppContext.Provider value={{ amountItems, addItem, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};
