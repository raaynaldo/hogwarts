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
      hogs: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    let newHogs = hogs;
    if (this.state.filter !== "all") {
      newHogs = newHogs.filter(
        (hog) => hog.greased.toString() === this.state.filter
      );
    }

    if (this.state.sort === "weight") {
      newHogs = newHogs.sort(function (a, b) {
        return a.weight - b.weight;
      });
    } else if (this.state.sort === "name") {
      newHogs = newHogs.sort(function (a, b) {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }

    this.setState({
      hogs: newHogs,
    });
  };

  filterHandler = (filterBy) => {
    this.setState(
      {
        filter: filterBy,
      },
      () => this.fetchData()
    );
  };

  sortHandler = (sortBy) => {
    this.setState(
      {
        sort: sortBy,
      },
      () => this.fetchData()
    );
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
