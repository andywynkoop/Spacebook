import React, { Component } from 'react';

class MainPage extends Component {
  render() {
    return <div className="main-content">{this.props.children}</div>;
  }
}

export default MainPage;
