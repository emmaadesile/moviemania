import styled from "styled-components";

const Container = styled.div`

  width: 100%;
`;

const Content = styled.div`
  padding: 50px;

  img {
    background-size: cover;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;

const TrendingHeader = styled.header`
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  overflow-y: hidden;

  .feature1 {
  }

  .feature2 {
  }
`;

const TrendingText = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
  color: var(--myRed);
  margin-bottom: 80px;
  padding-left: 20px;
`;

const TrendingVidoes = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  align-items: start;
  background: white;
  margin: -80px 0 auto;
  z-index: 1000;
  padding: 20px;
`;

export { Container, Content, TrendingText, TrendingVidoes, TrendingHeader };
