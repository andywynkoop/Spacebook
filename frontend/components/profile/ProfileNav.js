import React, { Component } from 'react';

class NavMain extends Component {
  render() {
    return (
      <nav className="profile-nav">
        <div className="profile-img">
          <img
            src={
              'http://res.cloudinary.com/dmynah8jz/image/upload/c_scale,w_446/v1522968300/20170422_150306.jpg'
            }
          />
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
