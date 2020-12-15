import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div>
      <div className="navWrapper">
        <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
          <img src={piggy} className="App-logo" alt="piggy" />
        </div>
        <span className="normalText">A React App for County Fair Hog Fans</span>
      </div>
      <div className="ui grid">
        <label htmlFor="">Filter : </label>
        <select name="filter" id="filter" onChange={(event) => props.filterHandler(event.target.value)}>
          <option value="all">All</option>
          <option value="true">Greased</option>
          <option value="false">Ungreased</option>
        </select>
        <label htmlFor="">Sort : </label>
        <select name="sort" id="sort" onChange={(event) => props.sortHandler(event.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        {/* <button>Search Pigs</button> */}
      </div>
    </div>
  );
};

export default Nav;
