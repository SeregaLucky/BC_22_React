import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Paginate extends Component {
  handlePageClick = data => {
    const { value, addItems } = this.props;

    const page = data.selected + 1;
    console.log(1111111111, page);

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
    const { page, allPages } = this.props;

    return (
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        // pageCount={this.state.pageCount}
        pageCount={allPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    );
  }
}

export default Paginate;
