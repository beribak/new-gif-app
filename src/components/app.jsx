import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "R5MTbqqRFOCas",
      gifs: [
        "R5MTbqqRFOCas",
        "R5MTbqqRFOCas",
        "R5MTbqqRFOCas",
        "hqmTmfV688u8I7w7fh",
        "R5MTbqqRFOCas",
        "hqmTmfV688u8I7w7fh",
        "R5MTbqqRFOCas",
        "hqmTmfV688u8I7w7fh"

      ]
    };
  }

  selectGif = (id) => {
    this.setState({
      id: id
    });
  }

  render() {

    return(
      <div>
        <div className="left-div">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.id}/>
          </div>
        </div>
        <div className="right-div">
          <GifList list={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }

}

export default App;
