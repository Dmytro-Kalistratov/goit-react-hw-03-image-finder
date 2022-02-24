import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoadMore from './LoadMore';

class App extends Component {
  state = {
    searchValue: '',
  };

  searchFormSubmit = searchValue => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchFormSubmit} />
        <ImageGallery searchValue={this.state.searchValue} />
        {/* <LoadMore /> */}
      </div>
    );
  }
}

export default App;
