import React, { Component } from 'react';

class Main2 extends Component {
  state = {
    list: null,
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
    // console.log('Update');
    // console.log('this.state', this.state);
    // console.log('prevState', prevState);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { list } = this.state;

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
        </>
      )
    );
  }
}

export default Main2;
