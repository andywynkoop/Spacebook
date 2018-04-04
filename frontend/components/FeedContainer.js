import React from 'react';
import Feed from './Feed';
import { connect } from 'react-redux';
import { logout } from '../actions/session';

const mapStateToProps = ({ session }) => ({
  session,
  hello: 'afzsad'
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
