import React from "react";
import { HeaderBox, HeaderContainer, HeaderNav } from "./styles";
import coffeeLogo from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

export const Header = () => {
  const { totalAmountOfCoffees } = React.useContext(AppContext);
  const [totalCartItems, setTotalCartItems] = React.useState(0);

  React.useEffect(() => {
    if (totalAmountOfCoffees.length > 0) {
      const total = totalAmountOfCoffees.reduce((acc, valeu) => {
        return acc + valeu.amount;
      }, 0);
      setTotalCartItems(total);
    }
  }, [totalAmountOfCoffees]);

  return (
    <HeaderContainer>
      <HeaderNav>
        <Link to={"/"}>
          <img src={coffeeLogo} />
        </Link>
        <HeaderBox>
          <span>
            <MapPin size={24} weight="fill" /> Porto Alegre, RS
          </span>
          <Link to={"/checkout"}>
            {totalCartItems > 0 && (
              <div className="total">{totalCartItems}</div>
            )}
            <ShoppingCart size={24} weight="fill" />
          </Link>
        </HeaderBox>
      </HeaderNav>
    </HeaderContainer>
  );
};
