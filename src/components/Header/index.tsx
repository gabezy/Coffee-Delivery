import React from "react";
import { HeaderBox, HeaderContainer, HeaderNav } from "./styles";
import coffeeLogo from "../../assets/logo-coffee.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

export const Header = () => {
  const { totalAmountOfCoffees } = React.useContext(AppContext);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    let totalCoffees = 0;
    if (totalAmountOfCoffees.length > 0) {
      for (const coffee of totalAmountOfCoffees) {
        totalCoffees += coffee.amount;
      }
      setTotal(totalCoffees);
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
            {total > 0 && <div className="total">{total}</div>}
            <ShoppingCart size={24} weight="fill" />
          </Link>
        </HeaderBox>
      </HeaderNav>
    </HeaderContainer>
  );
};
