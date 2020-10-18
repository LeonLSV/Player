import React from "react";
import "./styles/Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faSearch,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar__container">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="navbar__container-img1"
        />
        <h1>My Playlist</h1>
        <FontAwesomeIcon icon={faSearch} className="navbar__container-img2" />
      </div>
    );
  }
}

export default Navbar;
