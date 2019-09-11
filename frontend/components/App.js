import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Profile from './profile/Profile';

export default () => 
  <div className="app">
    <HashRouter>
      <Switch>
        <Route path="/:userUrl" component={Profile} />
        <Route path="/" component={MainPage} />
      </Switch>
    </HashRouter>
  </div>

