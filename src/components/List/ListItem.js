import React from "react";
import "../styles/ListItem.css";
import { Link } from "react-router-dom";

import {
  ContentItem,
  ContentText,
  TextH,
  TextP,
  TextTime,
  TextTimeP,
} from "./styled";

class List extends React.Component {
  render() {
    return (
      <Link to="/play" className="link">
        <ContentItem>
          <div className="list__container-img">
            <img src={this.props.image} alt="" />
          </div>
          <ContentText>
            <TextH>
              <div>{this.props.title}</div>
            </TextH>
            <TextP>
              <div>{this.props.artist}</div>
            </TextP>
          </ContentText>
          <TextTime>
            <TextTimeP>
              <p>{this.props.time}</p>
            </TextTimeP>
          </TextTime>
        </ContentItem>
      </Link>
    );
  }
}

export default List;
