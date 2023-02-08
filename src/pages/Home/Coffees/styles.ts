import styled from "styled-components";
import { BaseTitle } from "../../../styles/global";

export const CoffeesContainer = styled.main`
  margin-top: 50px;
`;

export const CoffeesTitle = styled(BaseTitle)`
  font-size: 2rem;
  margin-bottom: calc(54px - 20px);
  color: ${({ theme }) => theme.baseTitle};
`;

export const CoffeesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px 0;
`;
