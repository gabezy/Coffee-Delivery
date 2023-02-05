import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppContextProvider } from "./contexts/AppContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/Themes/light";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <AppContextProvider>
          <Router />
        </AppContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
