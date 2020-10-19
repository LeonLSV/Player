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
        <audio
          src="https://leonsonidovirtual.com/wp-content/uploads/2020/10/y2mate.com-calvin_harris_flashback_radio_edit_oPAb_tIMifY.mp3"
          controls></audio>
      </div>
    );
  }
}

export default ContentPlay;
