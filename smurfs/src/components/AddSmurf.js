import React, { Component } from "react";
import axios from "axios";

class AddSmurf extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      age: 0,
      height: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state;

    axios.post("http://localhost:3333/smurfs", data).then((res) => {
      if (res.data) {
        this.props.updateData();
      }
    });
  };
  handleChange = (e) => {
    const input = e.target.name;
    this.setState({ [input]: e.target.value });
  };
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
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
        <input className="add" type="submit" value="Add" />
      </form>
    );
  }
}

export default AddSmurf;
