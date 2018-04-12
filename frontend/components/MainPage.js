import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';
import SignUpContainer from './session/SignUpContainer';
import { logout, fetchCurrentUser } from '../actions/session';
import { fetchAllUsers } from '../actions/user';
import { fetchFeed } from '../actions/post';

class MainPage extends Component {
  componentDidMount() {
    console.log('render');
    const {
      fetchCurrentUser,
      fetchAllUsers,
      fetchFeed,
      currentUser
    } = this.props;
    fetchFeed(currentUser.id).then(() => {
      fetchAllUsers().then(() => {
        fetchCurrentUser().then(() => {
          fetchFeed(currentUser.id);
        });
      });
    });
  }
  render() {
    const { currentUser, logout } = this.props;
    if (!!currentUser) {
      return <Feed currentUser={currentUser} logout={logout} />;
    } else {
      return <SignUpContainer />;
    }
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchFeed: id => dispatch(fetchFeed(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
