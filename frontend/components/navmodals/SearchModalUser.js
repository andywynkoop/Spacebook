import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NULL_PROFILE } from '../../util/img_util';

class SearchModalUser extends Component {
  render() {
    const { history, data } = this.props;
    return (
      <div
        className="search-modal-user"
        onClick={() => this.props.history.push(`/${data.userUrl}`)}
      >
        <div
          style={{
            backgroundImage: `url("${data.profileImgUrl || NULL_PROFILE}")`
          }}
          className="search-modal-user-profile"
        />
        <p>
          {data.firstname} {data.lastname}
        </p>
      </div>
    );
  }
}

export default withRouter(SearchModalUser);
