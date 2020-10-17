import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Playlist from "../pages/Playlist";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Playlist} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
