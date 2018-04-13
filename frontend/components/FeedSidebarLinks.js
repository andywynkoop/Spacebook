import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class FeedSidebarLinks extends Component {
  render() {
    if (!this.props.currentUser) return <div />;
    const { currentUser: user } = this.props;
    return (
      <div>
        <ul className="feed-sidebar-links">
          <li className="feed-profile-link">
            <Link to={`/${user.userUrl}`}>
              <img src={user.profileImgUrl} />{' '}
              <p>
                {user.firstname} {user.lastname}
              </p>
            </Link>
          </li>
          <li>
            <i className="far fa-newspaper" /> News Feed
          </li>
          <li>
            <i className="far fa-comment" /> Messenger
          </li>
          <li>
            <i className="fas fa-camera" /> Photos
          </li>
          <li>
            <i className="far fa-calendar" /> Events
          </li>
          <li>
            <i className="far fa-file-alt" /> Pages
          </li>
          <li>
            <i className="fab fa-github" /> Github
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });

export default connect(mapStateToProps)(withRouter(FeedSidebarLinks));
