import React, { Component } from 'react';

class Form extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => this.setState({ value: target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.makeFetch(this.state.value);
  };

  makeFetch = value => {
    const { page, addItems } = this.props;
    // const { value } = this.state;

    fetch(
      `https://newsapi.org/v2/everything?q=${value}&page=${page}&apiKey=33597ec26ed845a18da1dd8decec5ea1`,
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        addItems(data.articles, value, data.totalResults);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button type="submit">Find</button>
      </form>
    );
  }
}

export default Form;
