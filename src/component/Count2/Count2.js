import React, { Component } from "react";

class Count2 extends Component {
  state = {
    value: 0,
    step: 1,
  };

  dec = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - this.state.step,
      };
    });
  };

  // {...state,... {
  //       value: prevState.value + this.state.step,
  //     }; }

  // inc = () => {
  //   this.setState((prevState) => {
  //     return {
  //       value: prevState.value + this.state.step,
  //     };
  //   });

  //   this.setState((prevState) => {
  //     return {
  //       value: prevState.value + this.state.step,
  //     };
  //   });

  //   this.setState((prevState) => {
  //     return {
  //       value: prevState.value + this.state.step,
  //     };
  //   });
  // };

  inc = () => {
    this.setState({
      value: this.state.value + this.state.step,
    });

    this.setState({
      value: this.state.value + this.state.step,
    });

    this.setState({
      value: this.state.value + this.state.step,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <span>{value}</span>

        <button onClick={this.dec} type="button">
          Dec
        </button>
        <button onClick={this.inc} type="button">
          Inc
        </button>
      </>
    );
  }
}

export default Count2;
