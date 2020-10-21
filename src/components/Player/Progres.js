import React from "react";
import { ProgressContainer, ProgressP, ProgressBar } from "./styled";

class Progres extends React.Component {
  render() {
    return (
      <ProgressContainer>
        <ProgressP>2:07</ProgressP>

        <ProgressBar></ProgressBar>

        <ProgressP>4:50</ProgressP>
      </ProgressContainer>
    );
  }
}

export default Progres;
