import React from 'react';
import { Link } from 'react-router-dom';
import { NULL_PROFILE } from '../../util/img_util';

const profileStyle = user => 
  ({ backgroundImage: `url("${user.profileImgUrl || NULL_PROFILE}")` });

const SearchModalUser = ({ user }) => 
  <Link to={`/${user.userUrl}`}>
    <div className="search-modal-user">
      <div
        style={profileStyle(user)}
        className="search-modal-user-profile"
      />
      <p>
        {user.firstname} {user.lastname}
      </p>
    </div>
  </Link>

export default SearchModalUser;
