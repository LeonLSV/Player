import React from "react";
import { Link } from "react-router-dom";
import "./styles/AlbumItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

class AlbumItem extends React.Component {
  render() {
    return (
      <div className="album__container-main">
        <div className="album__container">
          <div className="album__container-img">
            <Link to="/playlist">
              <img src={this.props.image} alt="" />
            </Link>
          </div>

          <div className="album__container-text">
            <h3>Bailemos</h3>
            <FontAwesomeIcon
              icon={faEllipsisV}
              className="navbar__container-right-icon1"
            />
          </div>

          <div className="album__container-text">
            <p>Manuel Turizo</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AlbumItem;
