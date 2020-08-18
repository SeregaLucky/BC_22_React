import React, { Component } from 'react';

class Main extends Component {
  // constructor() {
  //   super();
  //   this.state = { value: 0 };
  //   console.log('constructor');
  // }

  state = { value: 0 };

  componentDidMount() {
    console.log('Mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Update');
  }

  // shouldComponentUpdate(nextProps, nestState) {
  //   return false;
  // }

  dec = () => this.setState({ value: this.state.value - 1 });

  inc = () => this.setState({ value: this.state.value + 1 });

  render() {
    console.log('RENDER!!!');
    const { value } = this.state;

    return (
      <div>
        <span>{value}</span>
        <button type="button" onClick={this.dec}>
          Dec
        </button>
        <button type="button" onClick={this.inc}>
          Inc
        </button>
      </div>
    );
  }
}

export default Main;
