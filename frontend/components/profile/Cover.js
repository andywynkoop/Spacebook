import React, { Component } from 'react';
import { NULL_COVER } from '../../util/img_util';

class Cover extends Component {
  render() {
    const { cover } = this.props;
    return (
      <div
        style={{ backgroundImage: `url("${cover || NULL_COVER}")` }}
        className="cover-img"
      />
    );
  }
}
export default Cover;
