import React from 'react';
import { dayMonthAndYear } from '../../util/selectors';

const AboutItem = ({ label, value }) => 
  <p>
    <span className="about-label">{label} </span> {value}
  </p>;

const About = ({ user: { birthday, bio } }) => 
  <div className="item-container about">
    <h1>Intro</h1>
    <AboutItem label="Birthday" value={dayMonthAndYear(birthday)} />
    <AboutItem label="About Me" value={bio} />
  </div>;

export default About;
