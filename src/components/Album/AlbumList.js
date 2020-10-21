import React from "react";
import AlbumItem from "./AlbumItem";
import turizo2 from "../../images/turizo2.jpg";
import turizo4 from "../../images/turizo4.jpg";
import turizo from "../../images/turizo.jpg";
import turizo1 from "../../images/turizo1.jpg";
import turizo3 from "../../images/turizo3.jpg";

import { AlbumItemContainer } from "../../Styled/containers";

class ContentAlbum extends React.Component {
  render() {
    return (
      <AlbumItemContainer className="scroll-list">
        <AlbumItem image={turizo2} />
        <AlbumItem image={turizo4} />
        <AlbumItem image={turizo} />
        <AlbumItem image={turizo1} />
        <AlbumItem image={turizo3} />
        <AlbumItem image={turizo4} />
      </AlbumItemContainer>
    );
  }
}

export default ContentAlbum;
