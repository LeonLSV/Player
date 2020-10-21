import React from "react";
import ContentPlay from "../components/PlayerContent/ContentPlay";

import { Container } from "./styled";

class Play extends React.Component {
  render() {
    return (
      <Container>
        <ContentPlay />
      </Container>
    );
  }
}

export default Play;
