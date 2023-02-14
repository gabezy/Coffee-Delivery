import { Coffee } from "./reducer";

export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
  INCREASE_COFFEE_AMOUNT = "INCREASE_COFFEE_AMOUNT",
  DECREASE_COFFEE_AMOUNT = "DECREASE_COFFEE_AMOUNT",
  RESET_COFFEES = "RESET_COFFEES",
}

export const addNewCoffeeAction = (newCoffee: Coffee) => {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: { newCoffee },
  };
};

export const removeCoffeeAction = (id: string) => {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: { id },
  };
};

export const increaseCoffeeAmountAction = (id: string) => {
  return {
    type: ActionTypes.INCREASE_COFFEE_AMOUNT,
    payload: { id },
  };
};

export const decreaseCoffeeAmountAction = (id: string) => {
  return {
    type: ActionTypes.DECREASE_COFFEE_AMOUNT,
    payload: { id },
  };
};

export const resetCoffeesAction = () => {
  return {
    type: ActionTypes.RESET_COFFEES,
  };
};
