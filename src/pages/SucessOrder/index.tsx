import React from "react";
import { Container } from "../../styles/global";
import {
  ListInfoParagraph,
  SucessOrderContainer,
  SucessOrderInfoContainer,
  SucessOrderTitle,
} from "./styles";
import banner from "../../assets/success-order-banner.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export const SuccessOrder = () => {
  return (
    <Container>
      <SucessOrderContainer>
        <SucessOrderTitle>Uhu! Pedido confirmado</SucessOrderTitle>
        <p className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <SucessOrderInfoContainer>
          <ul className="listInfo">
            <li>
              <MapPin size={30} className="purple" />
              <ListInfoParagraph>
                Entrega para{" "}
                <span className="street">Rua João Daniel Martinelli, 102</span>
                <span className="complement">Farrapos - Porto Alegre, RS</span>
              </ListInfoParagraph>
            </li>
            <li>
              <Timer size={30} className="yellow" />
              <ListInfoParagraph>
                Previsão de entrega <span>20 min - 30 min</span>
              </ListInfoParagraph>
            </li>
            <li>
              <CurrencyDollar size={30} className="orange" />
              <ListInfoParagraph>
                Pagamento na entrega <span>Cartão de Crédito</span>
              </ListInfoParagraph>
            </li>
          </ul>
          <img src={banner} alt="" />
        </SucessOrderInfoContainer>
      </SucessOrderContainer>
    </Container>
  );
};
