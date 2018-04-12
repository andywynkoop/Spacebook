import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';
import SignUpContainer from './session/SignUpContainer';
import { logout } from '../actions/session';

class MainPage extends Component {
  render() {
    console.log('mainpage');
    const { currentUser } = this.props;
    if (!!currentUser) {
      return <Feed currentUser={currentUser} logout={logout} />;
    } else {
      return <SignUpContainer />;
    }
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
