import React from 'react';
import Feed from './Feed';
import { connect } from 'react-redux';

const mapStateToProps = ({ session: { currentUser } }) => ({
  currentUser
});

export default connect(mapStateToProps)(Feed);
