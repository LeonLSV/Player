import React from "react";
import "./styles/ContentPlay.css";
import NavbarAlbum from "./NavbarAlbum";
import AlbumList from "./AlbumList";

class ContentAlbum extends React.Component {
  render() {
    return (
      <div className="content_play">
        <NavbarAlbum />
        <AlbumList />
        <NavbarAlbum />
        <AlbumList />
      </div>
    );
  }
}

export default ContentAlbum;
