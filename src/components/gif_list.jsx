import React, { Component } from 'react';

import Gif from './gif';

class GifList extends Component {

  render() {


    return(
      this.props.list.map(
        gif => <Gif id={gif}/>
      )
    );
  }
}

export default GifList;
