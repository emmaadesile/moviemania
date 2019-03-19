import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DINNextW01-Bold";
    src: url("./components/assets/fonts/DINNextW01-Bold.otf");
  }

  body {
    font-family: ${props => props.specialFont ? 'DINNextW01-Bold': 'Helvetica Neue'}
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle specialFont/>
        <Homepage />
      </div>
    );
  }
}

export default App;
