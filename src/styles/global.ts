import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.background};
    width: 100%;
    height: 100vh;

  }
  body, input, textarea, button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  img {
    max-width: 100%;
    display: block
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
  
`;

export const Container = styled.section`
  max-width: 1200px;
  margin-inline: auto;
  padding: 8px;
`;

export const BaseTitle = styled.h1`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  line-height: 1.3;
`;

export const Button = styled.button`
  width: 100%;
  text-align: center;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 12px 8px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.yellow};
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    background: ${({ theme }) => theme.yellowDark};
  }
`;

export const ICON_COLORS = {
  orange: "yellowDark",
  yellow: "yellow",
  purple: "purple",
  gray: "baseText",
} as const;

export interface ListItemProps {
  iconBackgroud: keyof typeof ICON_COLORS;
}

// export const ErrorMessage = styled.p`
//   color: #d35400;
//   font-size: 0.875rem;
// `;
