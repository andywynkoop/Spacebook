import React, { Component } from 'react';
const NULL_COVER =
  'http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_1078/v1522965076/20170516_113929.jpg';

class Cover extends Component {
  render() {
    const { cover } = this.props;
    return <img src={cover || NULL_COVER} className="cover-img" />;
  }
}
export default Cover;
