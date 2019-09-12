import React from 'react';
import { NULL_COVER } from '../../util/img_util';

const Cover = ({ cover, change }) => 
  <img
    src={cover || NULL_COVER}
    className="cover-img"
    onClick={change}
  />;

export default Cover;
