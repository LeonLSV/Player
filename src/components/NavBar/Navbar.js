import React from "react";
// import "../styles/Navbar.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavbarStyle, AngleLeft, SearchFa, TextH1 } from "./styled";

class Navbar extends React.Component {
  render() {
    return (
      <NavbarStyle>
        <Link to="/">
          <AngleLeft>
            <FontAwesomeIcon icon={faAngleLeft} />
          </AngleLeft>
        </Link>
        <TextH1>My Playlist</TextH1>
        <SearchFa>
          <FontAwesomeIcon icon={faSearch} />
        </SearchFa>
      </NavbarStyle>
    );
  }
}

export default Navbar;
