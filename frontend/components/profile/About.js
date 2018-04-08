import React, { Component } from 'react';
import AboutItem from './AboutItem';

class About extends Component {
  render() {
    const { birthday, bio } = this.props.user;
    return (
      <div className=" item-container about">
        <h1>Intro</h1>
        <AboutItem label="Birthday" value={new Date(birthday).toDateString()} />
        <AboutItem label="About Me" value={bio} />
      </div>
    );
  }
}

export default About;
