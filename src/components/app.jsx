import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "R5MTbqqRFOCas",
      gifs: []
    };
  }

  search = (query) => {
    giphy({ apiKey: "CuBjwgU0RjWbsxzewisHRPN0YA3PU0bL", https:true })
    .search({
      q: query,
      rating: 'g',
      limit: 15
    }, (err, res) => {
    // Res contains gif data!
      this.setState({
        gifs: res.data
      });
    });
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
          <SearchBar search={this.search} />
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
