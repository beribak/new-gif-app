import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return(
      <input
        type="text"
        className="form-control search-bar"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
