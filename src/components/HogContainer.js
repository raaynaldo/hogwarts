import React, { Component } from "react";
import HogTile from './HogTile.js'

class HogContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        <span>&nbsp;
            <HogTile hogs={this.props.hogs}/>
        </span>
      </div>
    );
  }
}

export default HogContainer;