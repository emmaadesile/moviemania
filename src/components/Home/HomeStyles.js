import styled from "styled-components";

const Container = styled.div`
  @media screen and (min-width: 1680px) {
    padding: 0 3em;
  }
`;

const Content = styled.div`
  padding: 20px;

  @media (min-width: 520px) {
    padding: 50px;
  }

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
    /* background-size: cover; */
  }

  .feature1 {
  }

  .feature2 {
    /* width: 530px; */

    .overlay {
      position: absolute;
      top: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 65%,
        rgba(0, 0, 0, 0.35) 83.5%,
        rgba(0, 0, 0, 0.75) 100%
      );
      width: 100%;
      height: 100%;
      z-index: 999;
    }
    .overview {
      padding: 1rem;
      color: #fff;
      position: absolute;
      bottom: 2rem;
      left: 0.5rem;

      h1 {
        font-size: 2.8rem;
        margin-bottom: 1rem;
      }

      p {
        width: 40rem;
        font-size:  1.2rem;
      }
      /* height: 100%;
      display: flex;
      align-items: flex-end; */
    }
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    height: 300px;

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
  /* background: white; */
  margin: -80px 0 auto;
  z-index: 1000;
  padding: 20px;

  @media (min-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

export { Container, Content, TrendingText, TrendingVidoes, TrendingHeader };
