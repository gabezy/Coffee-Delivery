import React from "react";
import { Container } from "../../styles/global";
import {
  ItemListOrder,
  ListInfoParagraph,
  ListOrder,
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
    resetTotalAmountOfCoffees,
  } = React.useContext(AppContext);

  React.useEffect(() => {
    resetTotalAmountOfCoffees();
  }, []);

  return (
    <Container>
      <SucessOrderContainer>
        <SucessOrderTitle>Uhu! Pedido confirmado</SucessOrderTitle>
        <p className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <SucessOrderInfoContainer>
          <ListOrder className="listInfo">
            <ItemListOrder iconBackgroud="purple">
              <MapPin size={30} />
              <ListInfoParagraph>
                Entrega para{" "}
                <span className="street">
                  {rua}, {numero}
                </span>
                <span className="complement">
                  {bairro} - {cidade}, {uf}
                </span>
              </ListInfoParagraph>
            </ItemListOrder>
            <ItemListOrder iconBackgroud="yellow">
              <Timer size={30} />
              <ListInfoParagraph>
                Previsão de entrega <span>20 min - 30 min</span>
              </ListInfoParagraph>
            </ItemListOrder>
            <ItemListOrder iconBackgroud="orange">
              <CurrencyDollar size={30} />
              <ListInfoParagraph>
                Pagamento na entrega <span>{pagamento}</span>
              </ListInfoParagraph>
            </ItemListOrder>
          </ListOrder>
          <div className="bannerContainer">
            <img src={banner} alt="" />
          </div>
        </SucessOrderInfoContainer>
      </SucessOrderContainer>
    </Container>
  );
};
