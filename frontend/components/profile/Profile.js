import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cover from './Cover';
import ProfileNav from './ProfileNav';
import MainPage from './MainPage';
import About from './About';
import NavMain from '../NavMain';
import { fetchUser } from '../../actions/user';
import MissingPage from './MissingPage';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    const { userUrl } = this.props.match.params;
    this.props.fetchUser(this.props.match.params.userUrl);
  }
  componentWillReceiveProps() {
    console.log('called');
    if (!this.props.currentUser) this.props.history.push('/');
  }
  render() {
    const { user, currentUser } = this.props;
    if (!user) return <MissingPage />;
    if (!currentUser) return <MissingPage />;
    return (
      <div>
        <NavMain />
        <div style={{ paddingTop: '42px' }}>
          <Cover src={user.coverPhotoUrl} />
          <ProfileNav
            profile={user ? user.profileImgUrl : null}
            name={`${user.firstname} ${user.lastname}`}
          />
          <MainPage>
            <About />
          </MainPage>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  { session: { currentUser }, entities: { users, userIdMap } },
  ownProps
) => {
  const id = userIdMap[ownProps.match.params.userUrl];
  return {
    currentUser,
    user: users[id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: userUrl => dispatch(fetchUser(userUrl))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
