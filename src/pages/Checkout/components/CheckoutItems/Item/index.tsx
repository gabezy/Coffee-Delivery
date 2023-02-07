import { Trash } from "phosphor-react";
import { AmountButton } from "../../../../../components/AmountButton";
import { Coffee } from "../../../../../contexts/AppContext";
import { ItemWrapper, RemoveItemButton } from "./styles";

export const Item = ({ imageURL, price, title, amount }: Coffee) => {
  const stringPrice = price.toString().replace(".", ",");

  return (
    <ItemWrapper>
      <img src={imageURL} alt="" />
      <div className="info">
        <p className="titleItem">{title}</p>
        <div>
          <AmountButton
            amount={amount}
            handleClickDecrease={() => console.log("test")}
            handleClickIncrease={() => console.log("test1")}
          />
          <RemoveItemButton>
            <Trash size={20} />
            Remover
          </RemoveItemButton>
        </div>
      </div>
      <span className="price">R$ {stringPrice + 0}</span>
    </ItemWrapper>
  );
};
