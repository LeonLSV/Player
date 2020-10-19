import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Playlist from "../pages/Playlist";
import Playy from "../pages/Play";
import Album from "../pages/Album";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/playlist" component={Playlist} />
        <Route exact path="/play" component={Playy} />
        <Route exact path="/" component={Album} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
