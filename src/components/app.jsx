import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div>
        <div className="left-div">
          <SearchBar />
          <div className="selected-gif">
            <Gif />
          </div>
        </div>
        <div className="right-div">Danko</div>
      </div>
    );
  }

}

export default App;
