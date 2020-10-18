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
        <FontAwesomeIcon icon={faDownload} className="buttons" />
        <FontAwesomeIcon icon={faStepBackward} className="buttons" />
        <FontAwesomeIcon icon={faPlay} className="buttons" />
        <FontAwesomeIcon icon={faStepForward} className="buttons" />
        <FontAwesomeIcon icon={faBars} className="buttons" />
      </div>
    );
  }
}

export default Player;
