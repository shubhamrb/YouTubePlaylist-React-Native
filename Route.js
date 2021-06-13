// Route.js
import React from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';
// import our screens as components
import Home from './app/screens/Home';
import WatchVideo from './app/screens/WatchVideo';
export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Playlist Videos" />
          <Scene key="watchvideo" component={WatchVideo} title="View Video" />
        </Stack>
      </Router>
    );
  }
}
