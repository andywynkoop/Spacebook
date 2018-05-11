import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Profile from './profile/Profile';
import Photo from './Photo';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Switch>
            <Route path="/photo" component={Photo} />
            <Route path="/:userUrl" component={Profile} />
            <Route path="/" component={MainPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
//render a 404 page if not found

export default App;
