import React, { Component } from 'react';

class NavMain extends Component {
  render() {
    const { profile } = this.props;
    return (
      <nav className="profile-nav">
        <div className="profile-img">
          <img src={profile} />
        </div>
        <h1 className="profile-nav-header">Andy Wynkoop</h1>
        <ul className="profile-nav-items">
          <li>Timeline</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>
            More <i className="fas fa-caret-down" />
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMain;
