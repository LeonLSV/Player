import React from "react";
import ContentNavbar from "../components/List/ContentNavbar";

import { Container } from "./styled";

class Playlist extends React.Component {
  render() {
    return (
      <Container>
        <ContentNavbar />
      </Container>
    );
  }
}

export default Playlist;
