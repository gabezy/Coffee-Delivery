import styled from "styled-components";
import { BaseTitle } from "../../../styles/global";

export const CoffeesContainer = styled.main`
  margin-block: 50px;
  flex: 1;
  flex-direction: column;
`;

export const CoffeesTitle = styled(BaseTitle)`
  font-size: 2rem;
  margin-bottom: calc(54px - 20px);
  color: ${({ theme }) => theme.baseTitle};
`;

export const CoffeesList = styled.ul`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;
