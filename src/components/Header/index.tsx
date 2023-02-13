import React from "react";
import {
  HeaderBox,
  HeaderContainer,
  HeaderNav,
  LocationContainer,
} from "./styles";
import coffeeLogo from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

export const Header = () => {
  const { totalAmountOfCoffees } = React.useContext(AppContext);
  const [totalCartItems, setTotalCartItems] = React.useState(0);

  React.useEffect(() => {
    const total = totalAmountOfCoffees.reduce((acc, valeu) => {
      return acc + valeu.amount;
    }, 0);
    setTotalCartItems(total);
  }, [totalAmountOfCoffees, setTotalCartItems]);

  return (
    <HeaderContainer>
      <HeaderNav>
        <Link to={"/"}>
          <img src={coffeeLogo} />
        </Link>
        <HeaderBox>
          <LocationContainer>
            <MapPin size={24} weight="fill" />
            <span>Porto Alegre, RS</span>
          </LocationContainer>
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
