import React from "react";
import "./styles/Image.css";

class Image extends React.Component {
  render() {
    return (
      <div className="image">
        <img src={this.props.image} alt="foto" />
      </div>
    );
  }
}

export default Image;
