import React from "react";
import { HeaderBox, HeaderContainer, HeaderNav } from "./styles";
import coffeeLogo from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

export const Header = () => {
  const { amountItems } = React.useContext(AppContext);

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
            {amountItems > 0 && <div className="total">{amountItems}</div>}
            <ShoppingCart size={24} weight="fill" />
          </Link>
        </HeaderBox>
      </HeaderNav>
    </HeaderContainer>
  );
};
