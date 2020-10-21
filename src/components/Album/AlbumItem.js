import React from "react";
import { Link } from "react-router-dom";
import "../styles/AlbumItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import {
  AlbumItemContenedor,
  AlbumItemImg,
  AlbumItemTextP,
  AlbumItemTextH3,
  AlbumItemIcon,
  scrollAlbum,
} from "../../Styled/containers";

class AlbumItem extends React.Component {
  render() {
    return (
      <div>
        <AlbumItemContenedor>
          <Link to="/playlist">
            <AlbumItemImg src={this.props.image} alt=""></AlbumItemImg>
          </Link>

          <AlbumItemTextH3>
            <div>Bailemos</div>
            <AlbumItemIcon>
              <FontAwesomeIcon icon={faEllipsisV} />
            </AlbumItemIcon>
          </AlbumItemTextH3>

          <AlbumItemTextP>Manuel Turizo</AlbumItemTextP>
        </AlbumItemContenedor>
      </div>
    );
  }
}

export default AlbumItem;
