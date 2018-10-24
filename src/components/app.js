import React, { Component } from 'react';
import BooksList from '../containers/bookslist'
import BookDetail from '../containers/bookdetail'

export default class App extends Component {
  render() {
    return (
      <div>
        <BooksList />
        <BookDetail />
      </div>
    );
  }
}
