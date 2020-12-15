import React, { Component } from "react";

class HogTile extends Component {
  renderPiggies = () => {
    return this.props.hogs.map((hog, id) => (
      <div className="ui card" key={id}>
        <div className="image">
          <img src="" />
        </div>
        <div className="content">
          <a className="header">{hog.name}</a>
          <div className="meta">
            <span className="weight">` Weight: {hog.weight}`</span>
          </div>
          <div className="specialty">{hog.specialty}</div>
          <div className="greased">{hog.greased ? "greased" : "ungreased"}</div>
        </div>
        <div className="extra content">
          <a>
            <i className="medal-achieved"></i>
            {/* highest medal achieved */}
            {hog["highest medal achieved"]}
          </a>
        </div>
      </div>
    ));
  };

  render() {
    return <div className="ui eight wide column">{this.renderPiggies()}</div>;
  }
}

export default HogTile;
