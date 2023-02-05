import React from "react";
import { HeaderBox, HeaderContainer, HeaderNav } from "./styles";
import coffeeLogo from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <img src={coffeeLogo} />
        <HeaderBox>
          <span>
            <MapPin size={24} weight="fill" /> Porto Alegre, RS
          </span>
          <Link to={"/checkout"}>
            <ShoppingCart size={24} weight="fill" />
          </Link>
        </HeaderBox>
      </HeaderNav>
    </HeaderContainer>
  );
};
