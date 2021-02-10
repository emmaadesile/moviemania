import React from "react";
import styled from "styled-components";

const Background = styled.div`
  height: 70px;
  background: #393939;
  color: #fff;
  text-align: center;
  display: grid;
  place-items: center;
  /* position: fixed;
  bottom: 0;
  left: 0; */
  width: 100%;

  a {
    text-decoration: none;
    color: red;
  }
`;

const Footer = () => (
  <Background>
    <p>
      Made by <a href="https://twitter.com/emma_adesile">Emmanuel</a>
    </p>
  </Background>
);

export default Footer;
