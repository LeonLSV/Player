import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faStepBackward,
  faStepForward,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
  PlayerContainer,
  PlayerButtons,
  PlayerPlay,
  PlayerButtonPlay,
} from "./styled";

class Player extends React.Component {
  render() {
    return (
      <PlayerContainer>
        <PlayerButtons>
          <FontAwesomeIcon
            icon={faDownload}
            onClick={() => console.log("presionado")}
          />
        </PlayerButtons>
        <PlayerButtons>
          <FontAwesomeIcon
            icon={faStepBackward}
            onClick={() => console.log("presionado")}
          />
        </PlayerButtons>
        <PlayerPlay>
          <FontAwesomeIcon
            icon={faPlay}
            onClick={() => console.log("presionado")}
          />
        </PlayerPlay>
        <PlayerButtons>
          <FontAwesomeIcon
            icon={faStepForward}
            onClick={() => console.log("presionado")}
          />
        </PlayerButtons>
        <PlayerButtons>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => console.log("presionado")}
          />
        </PlayerButtons>
      </PlayerContainer>
    );
  }
}

export default Player;
