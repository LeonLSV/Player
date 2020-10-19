import React from "react";
import "./styles/ContentPlay.css";
import NavbarPlay from "./NavbarPlay";
import TextPlay from "./TextPlay";
import Image from "./Image";
import Player from "./Player";
import Progres from "./Progres";
import turizo from "../images/turizo.jpg";

class ContentPlay extends React.Component {
  render() {
    return (
      <div className="content_play">
        <NavbarPlay />
        <Image image={turizo} />
        <TextPlay />
        <Progres />
        <Player />
      </div>
    );
  }
}

export default ContentPlay;
