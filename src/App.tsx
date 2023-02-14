import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CheckoutFormProvider } from "./contexts/CheckoutFormContext";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/Themes/light";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <CheckoutFormProvider>
            <Router />
          </CheckoutFormProvider>
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
