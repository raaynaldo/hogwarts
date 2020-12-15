import React, { Component } from "react";
import HogTile from "./HogTile.js";

class HogContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map((hog, id) => {
          return <HogTile hog={hog} key={id} />;
        })}
      </div>
    );
  }
}

export default HogContainer;
