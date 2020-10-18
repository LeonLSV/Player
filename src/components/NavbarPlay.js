import React from "react";
import "./styles/NavbarPlay.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faHeart,
  faEllipsisV,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

class NavbarPlay extends React.Component {
  render() {
    return (
      <div className="navbar__container">
        <FontAwesomeIcon
          icon={faAngleDown}
          className="navbar__container-img1"
        />
        <FontAwesomeIcon icon={faShareAlt} className="navbar__container-img2" />
        <FontAwesomeIcon icon={faHeart} className="navbar__container-img2" />
        <FontAwesomeIcon
          icon={faEllipsisV}
          className="navbar__container-img2"
        />
      </div>
    );
  }
}

export default NavbarPlay;
