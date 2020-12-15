import React, { Component } from "react";

class HogTile extends Component {
  state = {
    active: "non-active",
    divClass: "four wide column",
  };

  changeDisplay = () => {
    this.setState({
      active: "",
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
          <div className={`content ${this.state.active}`}>
            <a className="header">{this.props.hog.name}</a>
            <div className="meta">
              <span className="weight"> Weight: {this.props.hog.weight}</span>
            </div>
            <div className="specialty">{this.props.hog.specialty}</div>
            <div className="greased">
              {this.props.hog.greased ? "greased" : "ungreased"}
            </div>
            <div className="medal-achieved">
              {this.props.hog["highest medal achieved"]}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HogTile;
