import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import FeedContainer from './FeedContainer';
import MainPage from './session/MainPage';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route path="/:userURL" component={Profile} />
            <Route path="/" component={MainPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
//render a 404 page if not found

export default App;
