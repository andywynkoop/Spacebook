import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const msp = ({ session: { id }}) => ({ id });

const Conditional = ({ id, exact, path, loggedIn:LoggedIn, loggedOut: LoggedOut }) =>
  <Route path={path} exact={exact} render={props => 
    id ? <LoggedIn {...props} /> : <LoggedOut {...props} />
  } />;

const Protected = ({ id, exact, path, component:Component }) =>
  <Route path={path} exact={exact} render={props =>
    id ? <Component {...props} /> : <Redirect to="/" />
  } />;

export const ConditionalRoute = connect(msp)(Conditional);
export const ProtectedRoute = connect(msp)(Protected);