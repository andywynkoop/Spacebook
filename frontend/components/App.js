import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavMain from './NavMain';
import Feed from './Feed';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavMain />
        <BrowserRouter>
          <Switch>
            <Route exact to="/login" component={Login} />
            <Route exact to="/" component={Feed} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
