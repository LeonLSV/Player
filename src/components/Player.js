import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faDownload,
  faStepBackward,
  faStepForward,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/Player.css";

class Player extends React.Component {
  render() {
    return (
      <div className="Player">
        <FontAwesomeIcon
          icon={faDownload}
          className="buttons"
          onClick={() => console.log("presionado")}
        />
        <FontAwesomeIcon
          icon={faStepBackward}
          className="buttons"
          onClick={() => console.log("presionado")}
        />
        <div className="button_play">
          <FontAwesomeIcon
            icon={faPlay}
            className="buttons play"
            onClick={() => console.log("presionado")}
          />
        </div>
        <FontAwesomeIcon
          icon={faStepForward}
          className="buttons"
          onClick={() => console.log("presionado")}
        />
        <FontAwesomeIcon
          icon={faBars}
          className="buttons"
          onClick={() => console.log("presionado")}
        />
      </div>
    );
  }
}

export default Player;
