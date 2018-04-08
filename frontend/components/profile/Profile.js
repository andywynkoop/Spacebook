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
    this.fetchUser = this.fetchUser.bind(this);
  }
  componentDidMount() {
    this.fetchUser();
  }
  componentWillUpdate() {
    if (!this.props.currentUser) this.props.history.push('/');
  }
  componentDidUpdate() {
    console.log(this.props.user);
    if (!this.props.user) this.fetchUser();
  }
  fetchUser() {
    const { userUrl } = this.props.match.params;
    this.props.fetchUser(this.props.match.params.userUrl);
  }
  render() {
    const { user, currentUser } = this.props;
    console.log(currentUser);
    if (!user) return <MissingPage />;
    if (!currentUser) return <MissingPage />;
    console.log(user);
    return (
      <div>
        <NavMain />
        <div style={{ paddingTop: '42px' }}>
          <Cover cover={user.coverPhotoUrl} />

          <ProfileNav
            profile={user.profileImgUrl}
            name={`${user.firstname} ${user.lastname}`}
            user={user}
            currentUser={currentUser}
          />
          <MainPage>
            <About user={user} />
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
