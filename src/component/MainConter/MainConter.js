import React, { Component } from "react";
import Btn from "../Btn/Btn";

class MainConter extends Component {
  state = {
    dec: 0,
    inc: 0,
  };

  // ПЛОХО
  // change = (e) => {
  //   const value = e.target.textContent;
  //   this.setState({
  //     [value]: value === "dec" ? this.state[value] - 1 : this.state[value] + 1,
  //   });
  // };

  change = (value) => {
    this.setState({
      [value]: value === "dec" ? this.state[value] - 1 : this.state[value] + 1,
    });
  };

  render() {
    const { dec, inc } = this.state;

    return (
      <>
        <span>{dec}</span>
        <br />
        <span>{inc}</span>
        <br />

        <Btn type="button" name="dec" onClick={this.change} />
        <Btn type="button" name="inc" onClick={this.change} />
      </>
    );
  }
}

export default MainConter;
