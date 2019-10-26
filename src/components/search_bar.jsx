import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <input
        type="text"
        className="form-control search-bar"
        // onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
