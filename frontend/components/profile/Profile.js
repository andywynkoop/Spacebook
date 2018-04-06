import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cover from './Cover';
import ProfileNav from './ProfileNav';
import MainPage from './MainPage';
import About from './About';
import NavMain from '../NavMain';
import { fetchUser } from '../../actions/user';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    const { userUrl } = this.props.match.params;
    console.log(userUrl);
    this.props.fetchUser(this.props.match.params.userUrl);
  }
  render() {
    console.log(this.props.users);
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

const mapStateToProps = ({
  session: { currentUser },
  entities: { users }
}) => ({ currentUser, users });
const mapDispatchToProps = dispatch => ({
  fetchUser: userUrl => dispatch(fetchUser(userUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
