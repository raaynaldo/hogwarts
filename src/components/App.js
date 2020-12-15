import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: "all",
      sort: "name",
      hogs: hogs,
    };
  }

  fetchData = () => {
    //filter and sort
    console.log("fetch works!")
    let newHogs = hogs;
    if (this.state.filter !== "all") {
      newHogs = newHogs.filter((hog) => hog.greased == this.state.filter);
    }

    this.setState({
      hogs: newHogs,
    });
  };

  filterHandler = (filterBy) => {
    this.setState({
      filter: filterBy,
    }, this.fetchData());

    console.log("filter.works!")
    this.fetchData()
  };

  sortHandler = (sortBy) => {
    this.setState({
      sort: sortBy,
    });
  };

  render() {
    return (
      <div className="App">
        <Nav
          filter={this.state.filter}
          sort={this.state.sort}
          filterHandler={this.filterHandler}
          sortHandler={this.sortHandler}
        />
        <br />
        <br />
        <HogContainer hogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
