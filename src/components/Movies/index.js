import React from "react";
import { Link } from "@reach/router";
import Video from "../Video";
import Loader from "../Loader";
import {
  Wrapper,
  ContainerFluid,
  HeroImage,
  MovieGridContainer
} from "./MoviesStyles";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

class Movies extends React.Component {
  state = {
    movies: [],
    error: ""
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const endpoint = `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;

    return fetch(endpoint)
      .then(response => response.json())
      .then(data => this.storeMovies(data.results))
      .catch(error => this.setState({ error }));
  };

  storeMovies = data => {
    const movies = data.map(result => {
      const {
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date
      } = result;
      return {
        vote_count,
        id,
        genre_ids,
        poster_path,
        title,
        vote_average,
        release_date
      };
    });
    this.setState({ movies });
  };

  render() {
    const { movies } = this.state;

    return (
      <Wrapper>
        {movies.length === 0 ? (
          <Loader />
        ) : (
          <>
            <HeroImage />
            <ContainerFluid>
              <MovieGridContainer>
                {movies.map(movie => (
                  <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <Video key={movie.id} type="movie" video={movie} />
                  </Link>
                ))}
              </MovieGridContainer>
            </ContainerFluid>
          </>
        )}
      </Wrapper>
    );
  }
}

export default Movies;
