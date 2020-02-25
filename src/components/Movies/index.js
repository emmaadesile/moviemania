import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Video from "../Video";
import Loader from "../Loader";
import LoadMore from "../LoadMore";
import Header from "../Header";
import { Wrapper, ContainerFluid, MovieGridContainer } from "./MoviesStyles";

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseURL = process.env.REACT_APP_BASE_URL;

function Movies() {
  const [videos, setVideos] = useState([]);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const endpoint = `${baseURL}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`;

  useEffect(() => {
    (async () => {
      try {
        const fetchedVideos = await axios(endpoint);
        storeVideos(fetchedVideos.data.results);
      } catch (error) {
        setIsError(true);
      }
    })();
  }, [endpoint, page]);

  function storeVideos(data) {
    const storedVideos = data.map(
      ({
        title,
        vote_count,
        id,
        genre_ids,
        poster_path,
        original_name,
        vote_average,
        first_air_date,
        release_date
      }) => ({
        title,
        vote_count,
        id,
        genre_ids,
        poster_path,
        original_name,
        vote_average,
        first_air_date,
        release_date
      })
    );

    if (videos.length !== 0) {
      setVideos(videos.concat(storedVideos));
    } else {
      setVideos(storedVideos);
    }
  }

  function handleLoadMore() {
    if (page <= 5) {
      setPage(page + 1);
    }
    return;
  }

  return (
    <Wrapper>
      {isError && <h2>Oops something went wrong...</h2>}
      {videos.length === 0 && !isError ? (
        <Loader />
      ) : (
        <>
          <Header type="movie" />
          <ContainerFluid>
            <MovieGridContainer>
              {videos.map(movie => (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <Video key={movie.id} type="movie" video={movie} />
                </Link>
              ))}
            </MovieGridContainer>
            <LoadMore disabled={page === 5} handleClick={handleLoadMore} />
          </ContainerFluid>
        </>
      )}
    </Wrapper>
  );
}

export default Movies;
