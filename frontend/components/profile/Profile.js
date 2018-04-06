import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cover from './Cover';
import ProfileNav from './ProfileNav';
import MainPage from './MainPage';
import About from './About';
import NavMain from '../NavMain';

class Profile extends Component {
  componentDidMount() {
    if (!this.props.currentUser) this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <NavMain />
        <div style={{ paddingTop: '42px' }}>
          <Cover />
          <ProfileNav />
          <MainPage>
            <About />
          </MainPage>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ session: { currentUser } }) => ({ currentUser });

export default connect(mapStateToProps)(Profile);
