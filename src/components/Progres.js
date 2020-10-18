import React from "react";
import "./styles/Progres.css";

class Progres extends React.Component {
  render() {
    return (
      <div className="progres">
        <div className="progres__text">
          <p>2:07</p>
        </div>
        <div>
          <div className="progres__progres"></div>
        </div>
        <div className="progres__text">
          <p>4:50</p>
        </div>
      </div>
    );
  }
}

export default Progres;
