import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarPlayContainer,
  IconNavbarLeft,
  NavbarRight,
  IconNavbarRight,
} from "./styled";

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
      <NavbarPlayContainer>
        <div>
          <Link to="/playlist">
            <IconNavbarLeft>
              <FontAwesomeIcon icon={faAngleDown} />
            </IconNavbarLeft>
          </Link>
        </div>
        <NavbarRight>
          <IconNavbarRight>
            <FontAwesomeIcon icon={faShareAlt} />
          </IconNavbarRight>
          <IconNavbarRight>
            <FontAwesomeIcon icon={faHeart} />
          </IconNavbarRight>
          <IconNavbarRight>
            <FontAwesomeIcon icon={faEllipsisV} />
          </IconNavbarRight>
        </NavbarRight>
      </NavbarPlayContainer>
    );
  }
}

export default NavbarPlay;
