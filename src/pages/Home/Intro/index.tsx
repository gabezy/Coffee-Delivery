import React from "react";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  BannerContainer,
  IntroContainer,
  IntroContent,
  IntroList,
  IntroTitle,
  ListItem,
} from "./styles";
import coffeeBanner from "../../../assets/banner.png";

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroTitle>
          Encontre o café perfeito
          <br />
          para qualquer hora do dia
        </IntroTitle>
        <p className="subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver
          <br />a qualquer hora
        </p>
        <IntroList>
          <ListItem iconBackgroud="orange">
            <ShoppingCart weight="fill" size={25} className="orange" />
            Compra simples e segura
          </ListItem>
          <ListItem iconBackgroud="gray">
            <Package weight="fill" size={25} className="gray" />
            Embalagem mantém o café intacto
          </ListItem>
          <ListItem iconBackgroud="yellow">
            <Timer weight="fill" size={25} className="yellow" />
            Entrega rápida e rastreada
          </ListItem>
          <ListItem iconBackgroud="purple">
            <Coffee weight="fill" size={25} className="purple" />O café chega
            fresquinho até você
          </ListItem>
        </IntroList>
      </IntroContent>
      <BannerContainer>
        <img src={coffeeBanner} />
      </BannerContainer>
    </IntroContainer>
  );
};
