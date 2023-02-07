import React from "react";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { IntroContainer, IntroContent, IntroTitle } from "./styles";
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
        <ul className="introList">
          <li>
            <ShoppingCart weight="fill" size={25} className="orange" />
            Compra simples e segura
          </li>
          <li>
            <Package weight="fill" size={25} className="gray" />
            Embalagem mantém o café intacto
          </li>
          <li>
            <Timer weight="fill" size={25} className="yellow" />
            Entrega rápida e rastreada
          </li>
          <li>
            <Coffee weight="fill" size={25} className="purple" />O café chega
            fresquinho até você
          </li>
        </ul>
      </IntroContent>
      <img src={coffeeBanner} />
    </IntroContainer>
  );
};
