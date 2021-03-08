import React, { FC, useState } from "react";
import { Link } from "@reach/router";

import useDataAPI from "../../useData";

import Video from "../Video";
import Loader from "../Loader";
import LoadMore from "../LoadMoreButton";
import Header from "../Header";

import {
  Wrapper,
  ContainerFluid,
  VideoGridContainer,
} from "../../styles/videoStyles";

const Movies: FC = () => {
  const [page, setPage] = useState(1);
  const [videos, isError] = useDataAPI("movie", page);

  const handleLoadMore = ():void => {
    if (page <= 5) {
      setPage(page + 1);
    }
  };

  return (
    <Wrapper>
      {isError && <h2>Oops something went wrong...</h2>}
      {videos.length === 0 && !isError ? (
        <Loader />
      ) : (
        <>
          <Header type="movie" />
          <ContainerFluid>
            <VideoGridContainer>
              {videos.map((movie, index) => (
                <Link to={`/movie/${movie.id}`} key={index}>
                  <Video type="movie" video={movie} />
                </Link>
              ))}
            </VideoGridContainer>
            <LoadMore disabled={page === 5} handleClick={handleLoadMore} />
          </ContainerFluid>
        </>
      )}
    </Wrapper>
  );
};

export default Movies;
