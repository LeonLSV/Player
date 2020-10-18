import React from "react";
import Navbar from "../components/Navbar";
import "./styles/Playlist.css";
import ContentPlay from "../components/ContentPlay";

class Play extends React.Component {
  render() {
    return (
      <div className="play_container">
        <ContentPlay />
      </div>
    );
  }
}

export default Play;
