import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar__container">
        <Link to="/">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="navbar__container-img1"
          />
        </Link>
        <h1>My Playlist</h1>
        <FontAwesomeIcon icon={faSearch} className="navbar__container-img2" />
      </div>
    );
  }
}

export default Navbar;
