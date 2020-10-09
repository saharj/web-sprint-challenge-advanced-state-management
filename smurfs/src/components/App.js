import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { fetchData } from "./../store/actions/index";
import "./App.css";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      age: 0,
      height: "",
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state;

    axios.post("http://localhost:3333/smurfs", data).then((res) => {
      if (res.data) {
        this.props.fetchData();
      }
    });
  };
  handleChange = (e) => {
    const input = e.target.name;
    this.setState({ [input]: e.target.value });
  };

  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            Smurf's name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Smurf's age:
            <input
              name="age"
              type="number"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Smurf's height:
            <input
              name="height"
              type="text"
              value={this.state.height}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        {this.props &&
          this.props.smurfs.map((smurf, i) => {
            return (
              <div key={i}>
                <h2>{smurf.name}</h2>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            );
          })}
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
