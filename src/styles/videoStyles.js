import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ContainerFluid = styled.div`
  display: grid;
  padding: 20px 10px;
  
  @media (min-width: 640px) {
    padding: 0 50px;
  }
`;

const VideoGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  justify-items: center;
  align-items: start;
  background: #000;
  margin: -80px 0 auto;
  z-index: 1000;
  padding: 20px 10px;
  grid-gap: 10px;
  
  @media (min-width: 640px) {
    grid-gap: 2rem;
    padding: 30px 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export { Wrapper, ContainerFluid, VideoGridContainer };
