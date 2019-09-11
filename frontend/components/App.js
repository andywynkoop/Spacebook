import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import Profile from './profile/Profile';
import { ConditionalRoute, ProtectedRoute } from '../util/route_util';
import Feed from './Feed';
import SignUpContainer from '../components/session/SignUpContainer';

export default () => 
  <div className="app">
    <HashRouter>
      <Switch>
        <ProtectedRoute path="/:userUrl" component={Profile} />
        <ConditionalRoute path="/" loggedIn={Feed} loggedOut={SignUpContainer} />
      </Switch>
    </HashRouter>
  </div>

