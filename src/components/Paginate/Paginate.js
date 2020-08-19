import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { getNews } from '../../services/api';

class Paginate extends Component {
  handlePageClick = data => {
    const { value, addItems } = this.props;

    const page = data.selected + 1;

    getNews(value, page)
      .then(data => {
        console.log('Form data', data);
        addItems(data.articles, value, data.totalResults);
      })
      .catch(err => console.log(err));
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
