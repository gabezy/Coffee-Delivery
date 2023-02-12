import React from "react";
import { Trash } from "phosphor-react";
import { AmountButton } from "../../../../../components/AmountButton";
import { AppContext, Coffee } from "../../../../../contexts/AppContext";
import { ItemWrapper, RemoveItemButton } from "./styles";

export const Item = ({ imageURL, price, title, amount }: Coffee) => {
  const stringPrice = price.toFixed(2).replace(".", ",");
  const { removeItem, increaseAmount, decreaseAmount } =
    React.useContext(AppContext);

  console.log(amount);

  const handleIncreaseAmount = () => {
    increaseAmount(title);
  };

  const handleDecreaseAmount = () => {
    decreaseAmount(title);
  };

  const handleRemoveCoffee = () => {
    removeItem(title);
  };

  return (
    <ItemWrapper>
      <img src={imageURL} alt="" />
      <div className="info">
        <p className="titleItem">{title}</p>
        <div>
          <AmountButton
            amount={amount}
            handleClickDecrease={handleDecreaseAmount}
            handleClickIncrease={handleIncreaseAmount}
          />
          <RemoveItemButton onClick={handleRemoveCoffee}>
            <Trash size={20} />
            Remover
          </RemoveItemButton>
        </div>
      </div>
      <span className="price">R$ {stringPrice}</span>
    </ItemWrapper>
  );
};

// export const Item = ({ coffee }: any) => {
//   const stringPrice = coffee.price.toString().replace(".", ",");
//   const { removeItem, addAmount } = React.useContext(AppContext);

//   // console.log(coffee);

//   const handleIncreaseAmount = () => {
//     addAmount(coffee);
//   };

//   const handleRemoveCoffee = () => {
//     removeItem(coffee);
//   };

//   return (
//     <ItemWrapper>
//       <img src={coffee.imageURL} alt="" />
//       <div className="info">
//         <p className="titleItem">{coffee.title}</p>
//         <div>
//           <AmountButton
//             amount={coffee.amount}
//             handleClickDecrease={() => console.log("test")}
//             handleClickIncrease={handleIncreaseAmount}
//           />
//           <RemoveItemButton onClick={handleRemoveCoffee}>
//             <Trash size={20} />
//             Remover
//           </RemoveItemButton>
//         </div>
//       </div>
//       <span className="price">R$ {stringPrice + 0}</span>
//     </ItemWrapper>
//   );
// };
