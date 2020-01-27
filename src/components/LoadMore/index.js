import React from "react";
import { Link } from "@reach/router";
import { Container, ButtonText } from "./LoadMoreStyles";

const LoadMore = (props) => (
  <Container>
    <ButtonText onClick={props.handleClick}>Load More</ButtonText>
  </Container>
);

export default LoadMore;
