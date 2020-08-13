import React, { Component } from "react";

class Count extends Component {
  // static propTypes = {
  //   friends: PropTypes.shape({ id: PropTypes.string.isR }),
  // };

  // constructor() {
  //   super();
  //   this.state = {};
  // }

  state = {
    value: this.props.startValue,
    step: this.props.step,
  };

  // dec = () =>
  //   this.setState((prevState) => {
  //     return { value: prevState.value - step };
  //   });

  // dec = () =>
  //   this.setState((prevState) => ({
  //     value: prevState.value - this.state.step,
  //   }));

  dec = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - this.state.step,
      };
    });
  };

  inc = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + this.state.step,
      };
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

export default Count;
