import React from "react";

export default function HogDetail(props) {
  return (
    <div className="content">
      <a className="header">{props.hog.name}</a>
      <div className="meta">
        <span className="weight"> Weight: {props.hog.weight}</span>
      </div>
      <div className="specialty">{props.hog.specialty}</div>
      <div className="greased">
        {props.hog.greased ? "greased" : "ungreased"}
      </div>
      <div className="medal-achieved">
        {props.hog["highest medal achieved"]}
      </div>
    </div>
  );
}
