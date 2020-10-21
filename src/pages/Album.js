import React from "react";
import ContentAlbum from "../components/AlbumContent/ContentAlbum";

import { Container } from "./styled";

class Album extends React.Component {
  render() {
    return (
      <Container>
        <ContentAlbum />
      </Container>
    );
  }
}

export default Album;
