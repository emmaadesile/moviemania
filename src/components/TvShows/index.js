import React from "react";
import { Link } from "@reach/router";
import useDataAPI from "../../useDataApi";
import { ContainerFluid, TvShowGridContainer, Wrapper } from "./TvShowsStyles";
import Video from "../Video";
import Loader from "../Loader";
import Header from "../Header";
import LoadMore from "../LoadMore";

const TvShows = () => {
  const [videos, isError] = useDataAPI("tv");

  return (
    <Wrapper>
      {isError && <h2>Oops something went wrong...</h2>}
      {videos.length === 0 && !isError ? (
        <Loader />
      ) : (
        <>
          <Header type="tv" />
          <ContainerFluid>
            <TvShowGridContainer>
              {videos.map(show => (
                <Link to={`/tv/${show.id}`} key={show.id}>
                  <Video key={show.id} type="tv" video={show} />
                </Link>
              ))}
            </TvShowGridContainer>
            {/* <LoadMore disabled={page === 5} handleClick={handleLoadMore} /> */}
          </ContainerFluid>
        </>
      )}
    </Wrapper>
  );
};

export default TvShows;
