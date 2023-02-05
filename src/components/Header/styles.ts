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
    position: relative;
    .total {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: absolute;
      width: 21px;
      height: 21px;
      right: -8.35px;
      top: -8px;
      border-radius: 1000px;
      font-size: 12px;
      line-height: 1.3;
      font-weight: bold;
      background: ${({ theme }) => theme.yellowDark} !important;
      color: ${({ theme }) => theme.white} !important;
    }
  }
`;
