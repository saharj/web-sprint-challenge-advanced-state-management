import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchData } from "./../store/actions/index";
import "./App.css";
class App extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
