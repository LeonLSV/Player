import React from "react";
import "./styles/AlbumList.css";
import AlbumItem from "./AlbumItem";
import turizo2 from "../images/turizo2.jpg";
import turizo4 from "../images/turizo4.jpg";

class ContentAlbum extends React.Component {
  render() {
    return (
      <div className="albumitem__container">
        <AlbumItem image={turizo2} />
        <AlbumItem image={turizo4} />
      </div>
    );
  }
}

export default ContentAlbum;
