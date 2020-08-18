import React, { Component } from 'react';
// import Main2 from './components/Main2/Main2';
import Form from './components/Form/Form';
import List from './components/List/List';
import Paginate from './components/Paginate/Paginate';

class App extends Component {
  state = {
    list: [],
    page: 1,
    value: '',
    allPages: null,
  };

  addItems = (list, value, totalPages) => {
    console.log('list', list);
    const allPages = Math.ceil(totalPages / 20);
    this.setState({ list, value, allPages });
  };

  render() {
    const { list, page, value, allPages } = this.state;

    return (
      <>
        <Form page={page} addItems={this.addItems} />
        <List list={list} />
        <Paginate
          page={page}
          value={value}
          allPages={allPages}
          addItems={this.addItems}
        />
        {/* <Main2 /> */}
      </>
    );
  }
}

export default App;
