import React, { Component } from 'react';

import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div>
        <div class="left-div">
          <SearchBar />
        </div>
        <div class="right-div">Danko</div>
      </div>
    );
  }

}

export default App;
