import React from "react";
import "./styles/ListItem.css";
import { Link } from "react-router-dom";

class List extends React.Component {
  render() {
    return (
      <Link to="/play" className="link">
        <div className="list__container">
          <div className="list__container-img">
            <img src={this.props.image} alt="" />
          </div>
          <div className="list__container-text">
            <h2>{this.props.title}</h2>
            <p>{this.props.artist}</p>
          </div>
          <div className="list__container-time">
            <p>{this.props.time}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default List;
