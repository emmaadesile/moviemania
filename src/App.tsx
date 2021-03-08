import React from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./routes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/Global";

const theme = {
  specialFont: "DINNextW01Bold",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <Navigation />
        <Routes />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
