import React, { FC, useState } from "react";
import { Link } from "@reach/router";

import useDataAPI from "../../useData";

import Video from "../Video";
import Loader from "../Loader";
import Header from "../Header";
import LoadMore from "../LoadMoreButton";

import {
  Wrapper,
  ContainerFluid,
  VideoGridContainer,
} from "../../styles/videoStyles";

const TvShows: FC = () => {
  const [page, setPage] = useState(1);
  const [videos, isError] = useDataAPI("tv", page);

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
          <Header type="tv" />
          <ContainerFluid>
            <VideoGridContainer>
              {videos.map((show, index) => (
                <Link to={`/tv/${show.id}`} key={index}>
                  <Video key={show.id} type="tv" video={show} />
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

export default TvShows;
