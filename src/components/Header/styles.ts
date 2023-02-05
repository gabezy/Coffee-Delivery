import styled from "styled-components";

export const HeaderContainer = styled.header``;

export const HeaderNav = styled.nav`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.5rem;
    background: ${({ theme }) => theme.purpleLight};
    border-radius: 8px;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.purpleDark};
    svg {
      color: ${({ theme }) => theme.purple};
    }
  }
  a {
    padding: 0.5rem;
    background: ${({ theme }) => theme.yellowLight};
    border-radius: 8px;
    color: ${({ theme }) => theme.yellowDark};
  }
`;
