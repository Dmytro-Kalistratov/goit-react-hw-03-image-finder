import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  searchInputChange = event => {
    this.setState({
      searchValue: event.currentTarget.value.toLowerCase(),
    });
  };

  searchFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.searchValue);
    this.setState({ searchValue: '' });
  };

  render() {
    return (
      <div>
        <header name="searchbar">
          <form name="form" onSubmit={this.searchFormSubmit}>
            <input
              name="searchValue"
              className="input"
              type="text"
              value={this.state.searchValue}
              onChange={this.searchInputChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />

            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;
