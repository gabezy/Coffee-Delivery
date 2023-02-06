import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.background}
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
  color: ${({ theme }) => theme.baseTitle};
`;
