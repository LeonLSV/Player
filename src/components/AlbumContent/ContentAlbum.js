import React from "react";
// import "./styles/ContentPlay.css";
import NavbarAlbum from "../Album/NavbarAlbum";
import AlbumList from "../Album/AlbumList";

import { scrollAlbum, PlayerContainer } from "../../Styled/containers";

class ContentAlbum extends React.Component {
  render() {
    return (
      <PlayerContainer>
        <NavbarAlbum />
        <AlbumList />
        <NavbarAlbum />
        <AlbumList />
      </PlayerContainer>
    );
  }
}

export default ContentAlbum;
