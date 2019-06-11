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
    <Movies path="/movies" component={Movies} />
    <Tvshows path="/tv" />
    <VideoDetails exact path="/tv/:videoId/" component={VideoDetails} />
    <VideoDetails exact path="/movie/:videoId/" component={VideoDetails} />
  </Router>
);

export default Routes;
