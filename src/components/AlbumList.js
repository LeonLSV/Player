import React from "react";
import "./styles/AlbumList.css";
import AlbumItem from "./AlbumItem";
import turizo2 from "../images/turizo2.jpg";
import turizo4 from "../images/turizo4.jpg";
import turizo from "../images/turizo.jpg";
import turizo1 from "../images/turizo1.jpg";
import turizo3 from "../images/turizo3.jpg";

class ContentAlbum extends React.Component {
  render() {
    return (
      <div className="albumitem__container scroll-album">
        <AlbumItem image={turizo2} />
        <AlbumItem image={turizo4} />
        <AlbumItem image={turizo} />
        <AlbumItem image={turizo1} />
        <AlbumItem image={turizo3} />
        <AlbumItem image={turizo4} />
      </div>
    );
  }
}

export default ContentAlbum;
