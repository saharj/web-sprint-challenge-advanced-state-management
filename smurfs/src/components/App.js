import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchData } from "./../store/actions/index";
import "./App.css";
import AddSmurf from "./AddSmurf";
class App extends Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.props.fetchData();
  };

  render() {
    return (
      <div className="App">
        <AddSmurf updateData={this.fetchData} />
        <div className="wrapper">
          {this.props &&
            this.props.smurfs.map((smurf, i) => {
              return (
                <div className="smurf" key={i}>
                  <h2>Name: {smurf.name}</h2>
                  <p>age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
                </div>
              );
            })}
        </div>
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
