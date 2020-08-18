import React, { Component } from 'react';

class Main2 extends Component {
  state = {
    list: null,
    value: 0,
  };

  componentDidMount() {
    fetch(
      'https://newsapi.org/v2/everything?q=cat&apiKey=33597ec26ed845a18da1dd8decec5ea1',
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ list: data.articles });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Update');
    console.log('this.state', this.state);
    console.log('prevState', prevState);
  }

  shouldComponentUpdate() {
    return true;
  }

  dec = () => this.setState({ value: this.state.value - 1 });

  inc = () => this.setState({ value: this.state.value + 1 });

  render() {
    const { list, value } = this.state;

    return (
      list && (
        <>
          <ul>
            {list.map(item => (
              <li key={item.title}>
                <h2>{item.title}</h2>
                <img src={item.urlToImage} width={200} />
              </li>
            ))}
          </ul>

          <div>
            <span>{value}</span>
            <button type="button" onClick={this.dec}>
              Dec
            </button>
            <button type="button" onClick={this.inc}>
              Inc
            </button>
          </div>
        </>
      )
    );
  }
}

export default Main2;
