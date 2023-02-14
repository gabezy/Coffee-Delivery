import { ActionTypes } from "./actions";

export type Coffee = {
  id: string;
  title: string;
  amount: number;
  price: number;
  imageURL: string;
};

export const coffeesReducer = (state: Coffee[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return [...state, action.payload.newCoffee];
    case ActionTypes.REMOVE_COFFEE:
      if (state.length <= 0) return state;
      return state.filter((coffee) => coffee.id !== action.payload.id);
    case ActionTypes.INCREASE_COFFEE_AMOUNT:
      return state.map((coffee) => {
        if (coffee.id === action.payload.id) {
          const amount = coffee.amount + 1;
          return { ...coffee, amount: amount };
        } else return coffee;
      });
    case ActionTypes.DECREASE_COFFEE_AMOUNT:
      return state.map((coffee) => {
        if (coffee.id === action.payload.id && coffee.amount > 1) {
          const amount = coffee.amount - 1;
          return { ...coffee, amount };
        } else return coffee;
      });
    case ActionTypes.RESET_COFFEES:
      return [];

    default:
      return state;
  }
};
