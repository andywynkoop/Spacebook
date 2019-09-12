import React, { Component } from 'react';
import AboutItem from './AboutItem';

const About = ({ birthday, bio }) =>
  <div className="item-container about">
    <h1>Intro</h1>
    <AboutItem label="Birthday" value={new Date(birthday).toDateString()} />
    <AboutItem label="About Me" value={bio} />
  </div>;

export default About;
