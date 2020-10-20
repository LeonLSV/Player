import React from "react";
import "./styles/ContentNavbar.css";
import Navbar from "../components/Navbar";
import List from "./ListItem";
import turizo from "../images/turizo.jpg";
import turizo1 from "../images/turizo1.jpg";
import turizo2 from "../images/turizo2.jpg";
import turizo3 from "../images/turizo3.jpg";
import turizo4 from "../images/turizo4.jpg";

class ContentNavbar extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="scroll-list">
          <List
            title="Bailemos"
            artist="Manuel Turizo/Sech"
            image={turizo}
            time="3:40"
          />
          <List
            title="Culpables"
            artist="Manuel Turizo"
            image={turizo1}
            time="4:16"
          />
          <List
            title="Una Lady"
            artist="Manuel Turizo"
            image={turizo3}
            time="3:34"
          />
          <List
            title="Desconocidos"
            artist="Manuel Turizo"
            image={turizo4}
            time="3:24"
          />
          <List
            title="Aleluya"
            artist="Manuel Turizo/Reik"
            image={turizo2}
            time="2:58"
          />
          <List
            title="Te Quemaste"
            artist="Manuel Turizo"
            image={turizo1}
            time="3:24"
          />
          <List
            title="Sola"
            artist="Manuel Turizo"
            image={turizo4}
            time="3:22"
          />
          <List
            title="Sola"
            artist="Manuel Turizo"
            image={turizo4}
            time="3:22"
          />
          <List
            title="Sola"
            artist="Manuel Turizo"
            image={turizo4}
            time="3:22"
          />
          <List
            title="Sola"
            artist="Manuel Turizo"
            image={turizo4}
            time="3:22"
          />
        </div>
      </div>
    );
  }
}

export default ContentNavbar;
