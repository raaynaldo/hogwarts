import React, { Component } from "react";
import HogDetail from './HogDetail'

class HogTile extends Component {
  state = {
    active: false,
    divClass: "four wide column",
  };

  changeDisplay = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  hideHog = () => {
    this.setState({
      divClass: "hide",
    });
  };

  render() {
    return (
      <div className={this.state.divClass}>
        <div className="ui card hide">
          <div className="image">
            <img
              src={require(`../hog-imgs/${this.props.hog.name
                .replace(/[\s]/g, "_")
                .toLowerCase()}.jpg`)}
              alt="babe"
            />
            <button onClick={() => this.hideHog()}>hide hog</button>
            <button onClick={() => this.changeDisplay()}>read more</button>
          </div>
          {this.state.active ? <HogDetail hog={this.props.hog} /> : null}
        </div>
      </div>
    );
  }
}

export default HogTile;
