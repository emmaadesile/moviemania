import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin-bottom: 40px;
`;

const ButtonText = styled.button`
  font-family:"DINNextW01-Bold";
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid #ddd;
  padding: 15px 70px;
  cursor: pointer;
  color: grey;
  background: #fff;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    #333 50%,
    #333
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-position: 0 0;
    color: #fff;
  }
`;

const LoadMore = props => (
  <Container>
    <ButtonText onClick={props.handleClick}>Load More</ButtonText>
  </Container>
);

export default LoadMore;
