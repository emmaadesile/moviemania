import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerFluid, HeroImage, TvShowGridContainer, Wrapper } from './TvShowsStyles';
import Video from '../Video';
import Loader from '../Loader';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

class Tvshows extends React.Component {
  state = {
    tvShows  : []
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const endpoint = `${baseURL}/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc`;

    return fetch(endpoint)
      .then(response => response.json())
      .then(data => this.storeMovies(data.results))
      .catch(error => this.setState({ error }));
  }

  storeMovies = (data) => {
    const tvShows = data.map(result => {
      const  { vote_count, id, genre_ids, poster_path, original_name, vote_average, first_air_date } = result;
      return { vote_count, id, genre_ids, poster_path, original_name, vote_average, first_air_date };
    })
    this.setState({tvShows});
  }

  render() {
    const { tvShows } = this.state;
  
    return (
      <Wrapper>
        {
          tvShows.length === 0
          ? <Loader />
          : (
            <>
              <HeroImage />
              <ContainerFluid>
                <TvShowGridContainer>
                  {tvShows.map(show => (
                    <Link to={`/tv/${show.id}`} key={show.id}>
                      <Video key={show.id} type="tv" video={show}/>
                    </Link>
                  ))}
                </TvShowGridContainer>
              </ContainerFluid>
            </>
          )
        }
      </Wrapper>
    )
  }
};

export default Tvshows;
