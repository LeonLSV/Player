import React from "react";
import "./styles/Playlist.css";
import ContentNavbar from "../components/ContentNavbar";

class Playlist extends React.Component {
  render() {
    return (
      <div className="play_container">
        <ContentNavbar />
      </div>
    );
  }
}

export default Playlist;
