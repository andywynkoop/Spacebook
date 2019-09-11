import React from 'react';
import { NULL_PROFILE } from '../../util/img_util';
import { Link } from 'react-router-dom';

export default ({ data }) => {
  return (
    <Link to={`/${data.userUrl}`}>
      <div className="friend-card">
        <img src={data.profileImgUrl || NULL_PROFILE} />
        <p>{`${data.firstname} ${data.lastname}`}</p>
      </div>
    </Link>
  );
};
