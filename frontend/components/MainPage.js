import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedContainer from './FeedContainer';
import SignUpContainer from './session/SignUpContainer';

class MainPage extends Component {
  render() {
    const { currentUser } = this.props;
    if (!!currentUser) {
      return <FeedContainer />;
    } else {
      return <SignUpContainer />;
    }
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });
export default connect(mapStateToProps)(MainPage);
