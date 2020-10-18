import React from "react";
import "./styles/ContentPlay.css";
import NavbarPlay from "./NavbarPlay";
import Image from "./Image";
import turizo from "../images/turizo.jpg";
import turizo1 from "../images/turizo1.jpg";
import turizo2 from "../images/turizo2.jpg";
import turizo3 from "../images/turizo3.jpg";
import turizo4 from "../images/turizo4.jpg";

class ContentPlay extends React.Component {
  render() {
    return (
      <div className="content_play">
        <NavbarPlay />
        <Image image={turizo} />
      </div>
    );
  }
}

export default ContentPlay;