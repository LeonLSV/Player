import React from "react";
import "./styles/Playlist.css";
import ContentAlbum from "../components/ContentAlbum";

class Album extends React.Component {
  render() {
    return (
      <div className="play_container">
        <ContentAlbum />
      </div>
    );
  }
}

export default Album;
