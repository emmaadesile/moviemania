import React from 'react';
import { Link } from "@reach/router";
import useDataAPI from '../../useDataApi';
import Video from "../Video";
import Loader from "../Loader";
import LoadMore from "../LoadMore";
import {
  Wrapper,
  ContainerFluid,
  HeroImage,
  MovieGridContainer
} from "./MoviesStyles";

const Movies = props => {
  const [videos, isError] = useDataAPI('movie');
  // const { uri } = props

  function handleLoadMore () {
    console.log('load more movies')
  }

  return (
    <Wrapper>
      {isError && <h2>Oops something went wrong...</h2>}
      {videos.length  === 0 && !isError? (
        <Loader />
      ) : (
        <>
          <HeroImage />
          <ContainerFluid>
            <MovieGridContainer>
              {videos.map(movie => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <Video key={movie.id} type="movie" video={movie} />
                </Link>
              ))}
            </MovieGridContainer>
            <LoadMore handleClick={() => handleLoadMore()} />
          </ContainerFluid>
        </>
      )}
    </Wrapper>
  );
};

export default Movies;
