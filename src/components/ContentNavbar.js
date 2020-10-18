import React from "react";
import "./styles/ContentNavbar.css";
import List from "./List";

class ContentNavbar extends React.Component {
  render() {
    return (
      <div className="content_navbar">
        <List />
      </div>
    );
  }
}

export default ContentNavbar;
