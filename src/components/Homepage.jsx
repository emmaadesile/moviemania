import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ContainerFluid = styled.div`
  padding: 0 5rem;
`;

const HeroImage = styled.div`
  height: 490px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${require("../assets/images/avengers_endgame.jpg")});
`;

const MovieGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 240px);
  background-color: blue;
`;

class Homepage extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    
  }

  fetchMovies = () => {
    
  }

  render() {
    return (
      <Wrapper>
        <Navigation />
        <HeroImage>
          {/* <img 
            src={require("../assets/images/avengers_endgame.jpg")} */}
            {/* // srcset="../assets/images/aquaman-small.jpg 1024w, */}
            {/* //        ../assets/images/aquaman-smaller.jpg 800w, */}
            {/* //        ../assets/images/aquaman-smallest.jpg 500w" */}
            {/* // sizes="(min-width: 1024px) 1024px, 100vw" */}
            {/* alt="hero-background" /> */}

        </HeroImage>
        <ContainerFluid>
          <MovieGridContainer>
            {}
          </MovieGridContainer>
        </ContainerFluid>
      </Wrapper>
    )
  }
};

export default Homepage;
