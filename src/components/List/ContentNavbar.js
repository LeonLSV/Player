import React from "react";
import List from "./List";
import { ContentNavBar } from "./styled";

class ContentNavbar extends React.Component {
  render() {
    return (
      <ContentNavBar>
        <List />
      </ContentNavBar>
    );
  }
}

export default ContentNavbar;
