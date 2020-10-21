import React from "react";
import { AlbumNavbarContainer } from "../../Styled/containers";
import { TextH1 } from "../NavBar/styled";

class NavbarAlbum extends React.Component {
  render() {
    return (
      <AlbumNavbarContainer>
        <TextH1>Albums</TextH1>
      </AlbumNavbarContainer>
    );
  }
}

export default NavbarAlbum;
