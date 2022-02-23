import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageFinder.module.css';
import Searchbar from './Searchbar';

class ImageFinder extends Component {
  state = {
    searchValue: '',
  };

  searchInputChange = event => {
    this.setState({ searchValue: event.currentTarget.value.toLowerCase() });
  };

  searchFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchInputChange} />
      </>
    );
  }
}
