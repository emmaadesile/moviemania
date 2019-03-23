import React from 'react';
import { Route, Switch } from 'react-router';
import Movies from '../components/Movies';
import Tvshows from '../components/TvShows';
import VideoDetails from '../components/VideoDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Movies} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/tv" component={Tvshows} />
    <Route exact path="/tv/:videoId/" component={VideoDetails} />
    <Route exact path="/movie/:videoId/" component={VideoDetails} />
  </Switch>
);

export default Routes;
