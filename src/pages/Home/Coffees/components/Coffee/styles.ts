import styled from "styled-components";

export const CoffeeCard = styled.li`
  width: 256px;
  height: 310px;
  padding: 0 20px;
  background: ${({ theme }) => theme.baseCard};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-radius: 6px 36px 6px 36px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  img {
    width: 120px;
    margin-top: -20px;
  }
`;

export const CoffeeTypeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CoffeeType = styled.span`
  font-size: 0.625rem;
  font-weight: 800;

  text-transform: uppercase;
  line-height: 1.3;
  padding: 4px 8px;
  background: ${({ theme }) => theme.yellowLight};
  color: ${({ theme }) => theme.yellowDark};
  border-radius: 100px;
`;

export const CoffeeTitle = styled.h3`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ theme }) => theme.baseTitle};
`;

export const CoffeeDescription = styled.span`
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.baseLabel};
`;

export const CoffeeBuy = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .price {
    font-size: 0.8rem;
    line-height: 1.3;
    color: ${({ theme }) => theme.baseText};
    span {
      margin-left: 2px;
      font-size: 1.5rem;
      line-height: 1.3;
      font-family: "Baloo 2", cursive;
      font-weight: 800;
    }
  }
  .amount {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const BuyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s;
  background: ${({ theme }) => theme.purpleDark};
  svg {
    fill: ${({ theme }) => theme.white};
  }
  &:hover {
    background: ${({ theme }) => theme.purple};
  }
`;
