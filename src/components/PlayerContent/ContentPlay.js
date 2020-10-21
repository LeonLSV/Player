import React from "react";
import NavbarPlay from "../Player/NavbarPlay";
import TextPlay from "../Player/TextPlay";
import Image from "../Player/Image";
import Player from "../Player/Player";
import Progres from "../Player/Progres";
import turizo from "../../images/turizo.jpg";

import { PlayerContainer } from "../../Styled/containers";

class ContentPlay extends React.Component {
  render() {
    return (
      <PlayerContainer>
        <NavbarPlay />
        <Image image={turizo} />
        <TextPlay />
        <Progres />
        <Player />
      </PlayerContainer>
    );
  }
}

export default ContentPlay;
