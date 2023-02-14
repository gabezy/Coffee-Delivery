import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/Themes/light";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
