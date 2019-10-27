import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {

  render() {


    return(

      <div className="gif-list">
        {this.props.list.map(
                  gif => <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
                )}
      </div>
    );
  }
}

export default GifList;
