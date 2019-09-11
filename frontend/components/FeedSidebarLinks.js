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
            <span className="feed-ellipse">···</span>
          </li>
          <li>
            <div className="feed-link-left">
              <i className="far fa-newspaper" /> <span>News Feed</span>
            </div>
            <span className="feed-ellipse">···</span>
          </li>
          <li>
            <div className="feed-link-left">
              <i className="far fa-comment" /> <span>Messenger</span>
            </div>
            <span className="feed-ellipse">···</span>
          </li>
          <li>
            <div className="feed-link-left">
              <i className="fas fa-camera" /> <span>Photos</span>
            </div>
            <span className="feed-ellipse">···</span>
          </li>
          <li>
            <div className="feed-link-left">
              <i className="far fa-calendar" /> <span>Events</span>
            </div>
            <span className="feed-ellipse">···</span>
          </li>
          <li>
            <div className="feed-link-left">
              <i className="far fa-file-alt" /> <span>Pages</span>
            </div>
            <span className="feed-ellipse">···</span>
          </li>
          <li>
            <div className="feed-link-left">
              <i className="fab fa-github" /> <span>Github</span>
            </div>
            <span className="feed-ellipse">···</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { id } = state.session;
  const { users } = state.entities;
  return ({ 
    currentUser: users[id]
  });
}

export default connect(mapStateToProps)(withRouter(FeedSidebarLinks));
