import React from 'react';
import styled from 'styled-components';

const HeroImage = styled.div`
  background: ${props => props.type === 'movie'
    ? "url('../images/avengers_endgame.jpg')"
    : "url(../assets/images/got.jpeg)"};
  height: 520px;
  clip-path: polygon(0 0,0 98%,100% 92%,100% 0);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url(${require("../assets/images/avenger_endgame.jpg")}); */
`;

const Header = (type) => (
  <HeroImage type={type} />
);

export default Header;
