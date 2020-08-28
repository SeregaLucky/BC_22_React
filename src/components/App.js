import React from 'react';
import { connect } from 'react-redux';
import { dec, inc } from '../redux/counterReducer';

const App = ({ value, dec, inc }) => {
  const decFn = () => dec(1);
  const incFn = () => inc(1);

  return (
    <div>
      <span>value: {value}</span>

      <button type="button" onClick={decFn}>
        Dec
      </button>
      <button type="button" onClick={incFn}>
        Inc
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    value: state,
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(state);
  return {
    dec: value => dispatch(dec(value)),

    inc: value => dispatch(inc(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

//
//
//
//

// import React, { Component } from 'react';

// class App extends Component {
//   state = { value: 0 };

//   dec = () => this.setState({ value: this.state.value - 1 });
//   inc = () => this.setState({ value: this.state.value + 1 });

//   render() {
//     const { value } = this.state;

//     return (
//       <div>
//         <span>{value}</span>

//         <button type="button" onClick={this.dec}>
//           Dec
//         </button>
//         <button type="button" onClick={this.inc}>
//           Inc
//         </button>
//       </div>
//     );
//   }
// }

// export default App;
