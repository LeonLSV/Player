import React from "react";
import "./styles/NavbarPlay.css";
import { Link } from "react-router-dom";

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
        <div>
          <Link to="/">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="navbar__container-img1"
            />
          </Link>
        </div>
        <div className="navbar__container-right">
          <FontAwesomeIcon
            icon={faShareAlt}
            className="navbar__container-right-icon"
          />
          <FontAwesomeIcon
            icon={faHeart}
            className="navbar__container-right-icon"
          />
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="navbar__container-right-icon"
          />
        </div>
      </div>
    );
  }
}

export default NavbarPlay;
