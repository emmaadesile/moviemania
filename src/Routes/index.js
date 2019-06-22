import React from "react";
import { Router } from "@reach/router";
import Movies from "../components/Movies";
import Tvshows from "../components/TvShows";
import VideoDetails from "../components/VideoDetails";

const Home = () => (
  <div>
    <h1>Welcome to Movie Mania</h1>
  </div>
);

const Routes = () => ( 
  <Router>
    <Home path="/" />
    <Movies path="/movies" />
    <Tvshows path="/tv" />
    <VideoDetails path="/tv/:videoId/" />
    <VideoDetails path="/movie/:videoId/" />
  </Router>
);

export default Routes;
