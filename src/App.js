import React, { Component } from 'react';
import styles from './App.module.css';

console.log(styles);

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     toogle: true,
  //   };

  //    change = () => {
  //      // this.state.toogle = false;
  //      this.setState({ toogle: !this.state.toogle });
  //    };
  // }

  state = {
    toogle: true,
  };

  change = () => {
    // this.state.toogle = false; // ПЛОХО
    this.setState({ toogle: !this.state.toogle });
  };

  render() {
    return (
      <div className={styles.cont}>
        <h1 className={styles.title}>Title</h1>
        <h1>Title222</h1>

        <button onClick={this.change} type="button">
          Click
        </button>

        {this.state.toogle && <p>111</p>}
      </div>
    );
  }
}

export default App;
