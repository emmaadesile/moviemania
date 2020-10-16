import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Routes from "./Routes";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/Global";
import "./App.css";

const theme = {
  specialFont: "DINNextW01Bold",
};

// const GlobalStyle = createGlobalStyle`
//   :root {
//     --navHeight: 214px;
//     --myRed: #e50505;
//   }

//   @font-face {
//     font-family: "DINNextW01-Bold";
//     src: url("./assets/fonts/DINNextW01-Bold.otf") format(otf),
//     url("./assets/fonts/DINNextW01-Bold.otf") format(ttf);
//   }

//   * {
//     outline: none;
//   }

//   body {
//     font-size: 1rem;
//     /* font-family: "DINNextW01-Bold", "Helvetica Neue"; */
//   }

//   html {
//     font-family: "DINNextW01-Bold", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     box-sizing: border-box;
//     font-size: 14px;
//     font-display: fallback;
//   }

//   a {
//     text-decoration: none;
//   }

//   img {
//     width: 100%;
//   }
// `;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Navigation />
          <Routes />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
