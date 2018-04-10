import React, { Component } from 'react';
import { NULL_COVER } from '../../util/img_util';

class Cover extends Component {
  render() {
    const { cover } = this.props;
    return <img src={cover || NULL_COVER} className="cover-img" />;
  }
}
export default Cover;
