import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 1680px) {
    padding: 0 3em;
  }
`;

const Content = styled.div`
  padding: 50px;

  img {
    background-size: cover;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;

    .feature1 {
      display: none;
    }
  }
`;

const TrendingHeader = styled.header`
  height: 520px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 20px;
  overflow-y: hidden;
  position: relative;

  img {
    background-size: cover;
  }

  .feature1 {
  }

  .feature2 {
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    height: 200px;

    .feature1 {
      display: none;
    }
  }
`;

const TrailerWrapper = styled.div`
  position: absolute;
  bottom: 20px;
`;

const PlayButton = styled.div`
  width: 50px;
  border-radius: 50%;
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
