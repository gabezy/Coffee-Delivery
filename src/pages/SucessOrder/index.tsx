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
import { AppContext } from "../../contexts/AppContext";

export const SuccessOrder = () => {
  const {
    checkoutOrderDataObject: { rua, numero, pagamento, bairro, cidade, uf },
  } = React.useContext(AppContext);

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
                <span className="street">
                  {rua}, {numero}
                </span>
                <span className="complement">
                  {bairro} - {cidade}, {uf}
                </span>
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
                Pagamento na entrega <span>{pagamento}</span>
              </ListInfoParagraph>
            </li>
          </ul>
          <img src={banner} alt="" />
        </SucessOrderInfoContainer>
      </SucessOrderContainer>
    </Container>
  );
};
