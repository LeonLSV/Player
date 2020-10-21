import React from "react";

import { ImagePlayer } from "./styled";

class Image extends React.Component {
  render() {
    return <ImagePlayer src={this.props.image} alt="foto"></ImagePlayer>;
  }
}

export default Image;
