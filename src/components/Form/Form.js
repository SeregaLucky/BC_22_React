import React, { Component } from 'react';
import { getNews } from '../../services/api';

class Form extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => this.setState({ value: target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.makeFetch();
  };

  makeFetch = () => {
    const { page, addItems } = this.props;
    const { value } = this.state;

    getNews(value, page)
      .then(data => {
        console.log('Form data', data);
        addItems(data.articles, value, data.totalResults);
      })
      .catch(err => console.log(err));
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
