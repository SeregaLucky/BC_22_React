import React, { Component } from "react";

class Form extends Component {
  state = {
    value: "",
  };

  onChange = (e) => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;

    return (
      <form>
        <input type="text" value={value} onChange={this.onChange} />
      </form>
    );
  }
}

export default Form;
