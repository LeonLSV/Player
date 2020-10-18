import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Playlist from "../pages/Playlist";
import Playy from "../pages/Play";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Playlist} />
        <Route exact path="/play" component={Playy} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
