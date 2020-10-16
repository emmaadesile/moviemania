import { createGlobalStyle } from "styled-components";
import DINNextW01Bold from "../assets/fonts/DINNextW01Bold.otf";

const GlobalStyle = createGlobalStyle`
  :root {
    --navHeight: 214px;
    --myRed: #e50505;
  }
  
  @font-face {
    font-family: "DINNextW01Bold";
    src: url(${DINNextW01Bold}) format("opentype"),
    /* url(${DINNextW01Bold}) format("opentype"); */
  }

  *,
  *::before,
  *::after {
    outline: none;
    margin:  0;
    padding: 0;
  }

  
  html {
    box-sizing: border-box;
    font-size: 14px;
    font-display: fallback;
  }
  
  body {
    font-size: 1rem;
    font-family: "DINNextW01Bold", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background:  #000;
  }
  
  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }
`;

export default GlobalStyle;
