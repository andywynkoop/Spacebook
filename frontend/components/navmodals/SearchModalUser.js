import React from 'react';
import { withRouter } from 'react-router-dom';
import { NULL_PROFILE } from '../../util/img_util';

const SearchModalUser = ({ user }) => 
  <div
    className="search-modal-user"
    onClick={() => this.props.history.push(`/${user.userUrl}`)}
  >
    <div
      style={{
        backgroundImage: `url("${user.profileImgUrl || NULL_PROFILE}")`
      }}
      className="search-modal-user-profile"
    />
    <p>
      {user.firstname} {user.lastname}
    </p>
  </div>

export default withRouter(SearchModalUser);
