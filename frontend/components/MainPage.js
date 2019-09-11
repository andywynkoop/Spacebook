import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from './Feed';
import SignUpContainer from './session/SignUpContainer';
import { fetchFeed } from '../actions/post';

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    const { currentUser } = this.props;
    if (!!currentUser) {
      return <Feed currentUser={currentUser} />
    } else {
      return <SignUpContainer />;
    }
  }
}

const mapStateToProps = state => ({ 
  currentUser: state.entities.users[state.session.id] 
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
